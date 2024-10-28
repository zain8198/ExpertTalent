import React, { useEffect, useState } from 'react';
import "./AdmissionEnquiery.css";
import { Checkbox, FormControl, FormControlLabel, InputLabel, Select, TextField } from '@mui/material/node';
import { ClientId, PhoneMasking, PostMethod, cnicMasking, codeError, formatDate, getMethod } from '../../../utils/services';
import { errorMessage, succesMessage, toastError, toastSuccess } from '../../../utils/Toaster/toaster';

const INITIAL_STATE = {
    fname: "",
    lname: "",
    father: "",
    email: "",
    cnicno: "",
    city: "",
    courseCategory: "",
    courses: "",
    stdStatus: "",
    whatsappno: "",
    gender: "",
    cellno: "",
    lasteducation: "",
    dob: formatDate(new Date()),
    ownlaptop: false,
    zakat: false,
    jobStatus: "",
    getFreeDemo:false,
}
export const AdmissionEnquiry = (props) => {
    const [formData, setFormData] = useState({ ...INITIAL_STATE })
    const [errors, setErrors] = useState({});
    const [Cities, setCities] = useState([]);
    const [courseCategory, setCourseCategory] = useState([]);
    const [courses, setCourses] = useState([]);
    const [stdStatus, setStdStatus] = useState([]);
    const [genderData, setGenderData] = useState([]);
    const [jobStatusData, setJobStatusData] = useState([]);
    const [EntityId, setEntityId] = useState(0)

    useEffect(() => {
        getCity();
        getGender();
        getStudentStatus();
        getjobStatus();
    }, [])
    const getCity = () => {
        try {
            getMethod("city")
                .then((data) => {
                    if (data) {
                        setCities(data);
                    }
                })
                .catch(error => {
                    codeError(error);
                });
        } catch (error) {
            console.log(error);
        }
    };

    const getCourseCategory = (cityid) => {
        try {
            getMethod(`SMCourse/V2/CourseAgainstCityid/${cityid}`)
                .then((data) => {
                    if (data) {
                        setCourseCategory(data?.Data);
                    }
                })
                .catch(error => {
                    codeError(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    const getCourses = (city, coursecat) => {
        try {
            getMethod(`FOAdmEnquiry/V2/CourseExtend/${ClientId}/${city}/${coursecat}`)
                .then((data) => {
                    if (data) {
                        setCourses(data?.Data);
                    }
                })
                .catch(error => {
                    codeError(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    const getStudentStatus = () => {
        try {
            getMethod("lov/v2/list/STUS")
                .then((data) => {
                    if (data) {
                        setStdStatus(data?.Data);
                    }
                })
                .catch(error => {
                    codeError(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    const getGender = () => {
        try {
            getMethod("lov/v2/list/GTYPE")
                .then((data) => {
                    if (data) {
                        setGenderData(data?.Data);
                    }
                })
                .catch(error => {
                    codeError(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    const getjobStatus = () => {
        try {
            getMethod("lov/v2/list/JOBS")
                .then((data) => {
                    if (data) {
                        setJobStatusData(data?.Data);
                    }
                })
                .catch(error => {
                    codeError(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    const handleFormData = (event) => {
        debugger;
        if (!event) {
            return
        }
        const { name, value, type } = event?.target;
        setErrors({})
        if (type === "checkbox") {
            setFormData((prevField) => ({
                ...prevField,
                [name]: event.target.checked,
            }));
        }
        else if (name === "cellno" || name === "whatsappno") {
            setFormData((prevData) => ({
                ...prevData,
                [name]: PhoneMasking(value),
            }));
        }
        else if (name === "courseCategory") {
            getCourses(formData.city, value)
            setFormData((prevField) => ({
                ...prevField,
                [name]: value,
            }));
        }
        else if (name === "cnicno") {
            setFormData((prevField) => ({
                ...prevField,
                [name]: cnicMasking(value),
            }));
        }
        else {
            setFormData((prevField) => ({
                ...prevField,
                [name]: value,
            }));
        }
        if (name === "courses") {
            let row = courses.find(x => x.id === Number(value))
            setEntityId({entityid: row.entityid, batchid:row.batchid})
        }
        else if (name === "city") {
            getCourseCategory(value)
        }
    }

    const emailValidation = (event) => {
        if (!event) {
            return;
        }
        const { value, name } = event.target;
        if (value?.trim() === "") {
            return;
        }
        if (isValidEmail(value)) {
            setFormData((prevField) => ({
                ...prevField,
                [name]: value,
            }));
        }
        else {
            // Toaster("Please Insert Valid Email", "error");
            setFormData((prevField) => ({
                ...prevField,
                [name]: "",
            }));
        }

    }


    const clickSubmit = () => {
        let isValid = RequiredFields();
        if (!isValid) {
            return false;
        }
        let bb = {
            "Data": {
                "FOAdmEnquirydtls": [
                    {
                        "lineindex": 1,
                        //   "courseid": formData.courses,
                        "courseid": +formData.courses,
                        "genderid": formData.gender,
                        "childname": formData.fname +" "+ formData.lname,
                        "studentstatus": formData.stdStatus,
                        "ownlaptop": formData.ownlaptop,
                        "getdemo": formData.getFreeDemo,
                        "whatsappno": formData.whatsappno,
                        "email": formData.email,
                        "cellno": formData.cellno,
                        "lasteducation": formData.lasteducation,
                        "dob": formData?.dob,
                        "ezakat": formData?.zakat ? 1 : 0,
                        "cnicno": formData?.cnicno,
                        "enquirystatusid": 1172
                    }
                ],
                //   "noofchild": 1,
                "enquiryno": null,
                "enquirydate": new Date().toISOString(),
                "relationtypeid": 11,
                "name": formData.father,
                "address": "..",
                "phone": null,
                "cellno": formData.cellno,
                "email": null,
                "entityid": EntityId?.entityid,
                "sourcetypeid": 3651,
                "description": null,
                "assignto": 64046,
                "followupdate": null,
                "nextfollowup": null,
                "note": null,
                "resptypeid": null,
                "statusid": null,
                "followup": null,
                "id": null,
                "batchid": EntityId?.batchid,
                "testdate": null,
                "picktime": null,
                "droptime": null,
                "imageid": null,
                "jobstatus": formData?.jobStatus,
            },
            "DataAddon": {},
            "ReturnObject": true
        }
        PostMethod("FOAdmEnquiry/v2/", bb)
            .then((data) => {
                if (data) {
                    toastSuccess(succesMessage);
                    sentWelcomeEmail();
                }
            })
            .catch(error => {
                toastError(errorMessage);
                codeError(error);
            });

    }

    function isValidEmail(email) {
        // Define the regular expression for a valid email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;

        // Test the email against the regex
        return emailRegex.test(email);
    }

    const RequiredFields = () => {
        try {
            let validationErrors = {}
            if (!formData.fname) {
                validationErrors.fname = 'First Name is required';
            }
            if (!formData.lname) {
                validationErrors.lname = 'Last Name is required';
            }
            if (!formData.father) {
                validationErrors.father = 'Guardian is required';
            }
            if (!formData.email) {
                validationErrors.email = 'Email is required';
            }
            if (!formData.cnicno) {
                validationErrors.cnicno = 'CNIC is required';
            }
            if (!formData.city) {
                validationErrors.city = 'City is required';
            }
            if (!formData.courseCategory) {
                validationErrors.courseCategory = 'Course Category is required';
            }
            if (!formData.courses) {
                validationErrors.courses = 'Courses is required';
            }
            if (!formData.stdStatus) {
                validationErrors.stdStatus = 'Education Status is required';
            }
            if (!formData.whatsappno) {
                validationErrors.whatsappno = 'WhatsApp No is required';
            }
            if (!formData.gender) {
                validationErrors.gender = 'Gender is required';
            }
            if (!formData.cellno) {
                validationErrors.cellno = 'Cell No is required';
            }
            if (!formData.jobStatus) {
                validationErrors.jobStatus = 'Job Status is required';
            }

            if (!formData.dob) {
                validationErrors.dob = 'Date of birth is required';
            }
            setErrors(validationErrors);
            if (Object.keys(validationErrors).length !== 0) {
                return false;
            }
            else {
                return true;
            }
        } catch (error) {
            codeError(error);
        }
    }

    const sentWelcomeEmail = () => {
        try {
            let body = {
                "Data": {
                    sendfrom: "academics@ashreitech.edu.pk",
                    sendto: formData.email,
                    subject: "Enquiry Form",
                    body: "Welcome",
                }
            }
            PostMethod("FOAdmEnquiry/V2/SendEmailAsync", body)
                .then((data) => {
                    // if (data) {
                    setFormData({ ...INITIAL_STATE });
                    // }
                })
                .catch(error => {
                    codeError(error);
                });
        } catch (error) {
            codeError(error);
        }
    }



    return (
        <>
            <div className="background">
                <div className="form-container" style={{
                    borderStyle: 'solid',
                    borderWidth: '6px',
                    borderImage: 'linear-gradient(to bottom, #D0B62B, #E3AE2E, #008F71, #7C2916, #D0B62C, #053750)',
                    borderImageSlice: 1,
                    borderRadius: '10px',
                }}>
                    <form>
                        <h2 className="text-center mb-3">Enquiry Form</h2>
                        <div className='row'>
                            <div className='col-12 col-lg-6'>
                                <TextField
                                    className="w-100 form_textField"
                                    id="outlined-controlled"
                                    label="First Name"
                                    size="small"
                                    name="fname"
                                    onChange={handleFormData}
                                    value={formData?.fname || ""}
                                    error={!!errors.fname}
                                    // helperText={errors.fname || ''}
                                    InputProps={{
                                        style: { Margin: "0px" }
                                    }}
                                />
                            </div>
                            <div className='col-12 col-lg-6'>
                                <TextField
                                    className="w-100 form_textField"
                                    id="outlined-controlled"
                                    label="Last Name"
                                    size="small"
                                    name="lname"
                                    value={formData?.lname || ""}
                                    error={!!errors.lname}
                                    // helperText={errors.lname || ''}
                                    onChange={handleFormData}
                                />
                            </div>
                        </div>

                        <div className='row mt-lg-3 mt-0'>
                            <div className='col-lg-6'>
                                <TextField
                                    className="w-100 form_textField"
                                    id="outlined-controlled"
                                    label="Father’s/Guardian Name"
                                    size="small"
                                    name="father"
                                    value={formData?.father || ""}
                                    error={!!errors.father}
                                    onChange={handleFormData}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <TextField
                                    className="w-100 form_textField"
                                    id="outlined-controlled"
                                    label="Email"
                                    size="small"
                                    name="email"
                                    value={formData?.email || ""}
                                    onChange={handleFormData}
                                    onBlur={emailValidation}
                                    error={!!errors.email}
                                // helperText={errors.email || ''}
                                />
                            </div>
                        </div>

                        <div className='row  mt-lg-3 mt-0'>
                            <div className='col-lg-6'>
                                <TextField
                                    className="w-100 form_textField"
                                    id="outlined-controlled"
                                    label="CNIC"
                                    size="small"
                                    name="cnicno"
                                    value={formData?.cnicno || ""}
                                    onChange={handleFormData}
                                    error={!!errors.cnicno}
                                    inputProps={{ maxLength: 15 }}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Preferred City</InputLabel>
                                    <Select
                                        name="city"
                                        error={!!errors.city}
                                        style={{ width: "100%" }}
                                        className="w-100 form_textField"
                                        onChange={handleFormData}
                                        value={formData?.city || ""}
                                        native
                                        label="Preferred City"
                                        inputProps={{
                                            name: 'city',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={""}></option>
                                        {
                                            Cities && Cities?.map((Val, index) => {
                                                return (<option key={index} value={Val.Id}>{Val.citystxt}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className='row mt-lg-3 mt-0'>
                            <div className='col-lg-6'>
                                <FormControl variant="outlined" size="small" className='w-100 form_textField'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Course Category</InputLabel>
                                    <Select
                                        disabled={formData?.city === ""}
                                        name="courseCategory"
                                        error={!!errors.courseCategory}
                                        onChange={handleFormData}
                                        value={formData?.courseCategory || ""}
                                        native
                                        label="Course Category"
                                        inputProps={{
                                            name: 'courseCategory',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={""}></option>
                                        {
                                            courseCategory && courseCategory?.map((Val, index) => {
                                                return (<option key={index} value={Val.Id}>{Val.category}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-lg-6'>
                                <FormControl variant="outlined" size="small" className='w-100 form_textField'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Courses</InputLabel>
                                    <Select
                                        disabled={formData?.city === "" || formData.courseCategory === ""}
                                        name="courses"
                                        error={!!errors.courses}
                                        onChange={handleFormData}
                                        value={formData?.courses || ""}
                                        native
                                        label="Courses"
                                        inputProps={{
                                            name: 'courses',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={0}></option>
                                        {
                                            courses && courses?.map((Val, index) => {
                                                return (<option key={index} value={Val.id}>{Val.name}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className='row  mt-lg-3 mt-0'>
                            <div className='col-lg-6'>
                                <FormControl variant="outlined" size="small" className='w-100 form_textField'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Education Status</InputLabel>
                                    <Select
                                        name="stdStatus"
                                        error={!!errors.stdStatus}
                                        onChange={handleFormData}
                                        value={formData?.stdStatus || ""}
                                        native
                                        label="Student Status"
                                        inputProps={{
                                            name: 'stdStatus',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={0}></option>
                                        {
                                            stdStatus && stdStatus.map((Val, index) => {
                                                return (<option key={index} value={Val.Id}>{Val.stxt}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-lg-6'>
                            <FormControl variant="outlined" size="small" className='w-100 form_textField'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Job Status</InputLabel>
                                    <Select
                                        name="jobStatus"
                                        error={!!errors.jobStatus}
                                        onChange={handleFormData}
                                        value={formData?.jobStatus || ""}
                                        native
                                        label="Job Status"
                                        inputProps={{
                                            name: 'jobStatus',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={0}></option>
                                        {
                                            jobStatusData && jobStatusData?.map((Val, index) => {
                                                return (<option key={index} value={Val.Id}>{Val.ltxt}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className='row   mt-lg-3 mt-0'>
                            <div className='col-lg-6'>
                                <FormControl variant="outlined" size="small" className='w-100 form_textField'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
                                    <Select
                                        name="gender"
                                        error={!!errors.gender}
                                        onChange={handleFormData}
                                        value={formData?.gender || ""}
                                        native
                                        label="Gender"
                                        inputProps={{
                                            name: 'gender',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={0}></option>
                                        {
                                            genderData && genderData?.map((Val, index) => {
                                                return (<option key={index} value={Val.Id}>{Val.stxt}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-lg-6'>
                                <TextField
                                    name="cellno"
                                    error={!!errors.cellno}
                                    onChange={handleFormData}
                                    value={formData?.cellno || ""}
                                    className="w-100 form_textField"
                                    id="outlined-controlled"
                                    label="Mobile Number"
                                    size="small"
                                    inputProps={{ maxLength: 12 }}
                                />
                            </div>
                        </div>
                        <div className='row   mt-lg-3 mt-0'>
                            <div className='col-lg-6'>
                                <TextField
                                    name="whatsappno"
                                    error={!!errors.whatsappno}
                                    onChange={handleFormData}
                                    value={formData?.whatsappno || ""}
                                    className="w-100 form_textField"
                                    id="outlined-controlled"
                                    label="WhatsApp Number"
                                    size="small"
                                    inputProps={{ maxLength: 12 }}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <TextField
                                    name="dob"
                                    onChange={handleFormData}
                                    value={formData?.dob || ""}
                                    className="w-100 form_textField"
                                    id="outlined-controlled"
                                    label="Date Of Birth"
                                    size="small"
                                    error={!!errors.dob}
                                    type="date"
                                // helperText={errors.dob || ''}
                                />
                            </div>
                        </div>
                        <div className='row '>
                            <div className='col-lg-6'>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="zakat"
                                            checked={formData?.zakat}
                                            onClick={handleFormData}
                                            // color="success"
                                            style={{ color: "#008F71" }}

                                        />
                                    }
                                    label="Financial Aid/ Zakat"
                                    sx={{ '& .MuiFormControlLabel-label': { fontSize: 12 } }}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="ownlaptop"
                                            checked={formData?.ownlaptop}
                                            onClick={handleFormData}
                                            // color="success"
                                            style={{ color: "#008F71" }}
                                        />
                                    }
                                    label="Do you have your own laptop?"
                                    sx={{ '& .MuiFormControlLabel-label': { fontSize: 12, } }}
                                />
                            </div>
                            <div className='col-lg-12 mt-n3'>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="getFreeDemo"
                                            checked={formData?.getFreeDemo}
                                            onClick={handleFormData}
                                            // color="success"
                                            style={{ color: "#008F71" }}
                                        />
                                    }
                                    label="Get a Free Demo ( Get a free 3 days demo )"
                                    sx={{ '& .MuiFormControlLabel-label': { fontSize: 12, } }}
                                />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-12 d-flex justify-content-center'>
                                <button type="button" className="actionBtn" onClick={clickSubmit}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <ToastContainer /> */}
        </>
    )
}
