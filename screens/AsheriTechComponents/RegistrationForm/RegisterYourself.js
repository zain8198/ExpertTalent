import React, { useEffect, useState } from 'react'
import { Checkbox, FormControl, FormControlLabel, InputLabel, Select, TextField } from '@mui/material/node'
// import "./RegisterYourself.css"
import { PostMethod, codeError, formatDate, getMethod } from '../../../utils/services'
import "../AdmissionEnquiery/AdmissionEnquiery.css";
import { errorMessage, succesMessage, toastError, toastSuccess } from '../../../utils/Toaster/toaster';

const dowpdownData = [
    { Id: 1, stxt: "value1" },
    { Id: 2, stxt: "value2" },
    { Id: 3, stxt: "value3" }
]

const INITIAL_STATE = {
    regNo: "",
    regDate: formatDate(new Date()),
    admReg: "",
    course: "",
    name: "",
    dob: "",
    gender: "",
    fname: "",
    cellno: "",
    whatsappno: "",
    email: "",
    lasteducation: "",
    zakat: "",
    ownlaptop: "",
    batchid: "",
    courseid:""
}

export const RegisterYourself = (props) => {
    const [formData, setFormData] = useState({ ...INITIAL_STATE });
    const [genderData, setGenderData] = useState([]);
    useEffect(() => {
        loadData();
        getGender();
    }, [])
    const handleFormData = (event) => {
        if (!event) {
            return
        }
        const { name, value, } = event?.target;
        setFormData((prevField) => ({
            ...prevField,
            [name]: value,
        }));
    }
    /* load Initial Data from Api */
    const loadData = () => {
        try {
            let Id = getIdFromUrl()
            getMethod(`FOAdmEnquiry/V2/EnquiryChildren/9119/${Id}`)
                .then((data) => {
                    if (data?.IsSuccess) {
                        let obj = data.Data[0];
                        setFormData((prevField) => ({
                            ...prevField,
                            "name": obj.childname,
                            "course": obj.coursestxt,
                            "gender": obj.genderid,
                            "fname": obj.fname,
                            "cellno": obj.cellno,
                            "whatsappno": obj.whatsappno,
                            "email": obj.email,
                            "lasteducation": obj.lastedu,
                            "ownlaptop": obj.ownlaptop,
                            "courseid": obj.courseid,
                            "batchid": obj.batchid,
                            "dob": formatDate(obj.dob),
                        }));
                    }
                })
                .catch(error => {
                    codeError(error);
                });
        } catch (error) {
            console.log(error);
        }
    };
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
    const getIdFromUrl = () => {
        // Get the hash part of the URL
        const hash = window.location.hash;

        // Remove the leading # and the / at the start
        const hashPath = hash.substring(2); // This removes "#/"

        // Split the remaining part by '?' to get the path and ID
        const parts = hashPath.split('?');

        // Extract the ID which is the second part
        const id = parts[1] ? parts[1].split('/')[0] : null;

        return id;
    };
    const clickNextBtn = (event) => {
      try {
        let bb = {
            "Data": {
              "appno": null,
              "appdate": "Tue Jul 09 2024",
              "courseid": formData?.courseid,
              "batchid": formData?.batchid,
              "studentname": formData?.name,
              "fathername": formData?.fname,
              "mothername": null,
              "countryid": 166,
              "stateid": 0,
              "cityid": 202354,
              "dateofbirth": formData?.dob,
              "genderid": formData?.gender,
              "bldgroupid": null,
              "religionid": null,
              "nationality": 166,
              "occupation": null,
              "address": "Bufferzone, Karachi.",
              "phoneno": null,
              "mobileno": "0323-5945321",
              "fathermobile": "0323-5945321",
              "fathercnic": null,
              "mothermobile": null,
              "email": null,
              "prevschool": null,
              "prevcourseid": null,
              "year": null,
              "marks": null,
              "grade": null,
              "leavingdate": null,
              "leavingreason": null,
              "fatherqualification": null,
              "motherqualification": null,
              "motheremail": null,
              "fatherincome": null,
              "mothercnic": null,
              "imageid": "",
              "entityid": 3256,
              "statusid": 80,
              "enquiryid": 63029,
              "enquirydtlid": 59858,
              "fathqualificationid": null,
              "fathoccupationid": null,
              "fathwhatsappno": null,
              "mothqualificaionid": null,
              "mothoccupationid": null,
              "mothwhatsappno": null,
              "prospectusno": null
            },
            "DataAddon": {},
            "ReturnObject": true
          }
        // https://sm.edu-man.com/sm/api/AdmApplication/v2/
        PostMethod("AdmApplication/v2/", bb)
        .then((data) => {
            if (data?.IsSuccess) {
                toastSuccess(succesMessage);
                props?.handleChange(event, 1)
            }
        })
        .catch(error => {
            toastError(errorMessage);
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
                    <div className='row'>
                            <div className='col-lg-6'>
                                <TextField
                                    name="regDate"
                                    value={formData?.regDate || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Registration Date"
                                    size="small"
                                    format="DD/MM/YYYY"
                                    disabled
                                    InputProps={{
                                        style: { Margin: "0px" }
                                    }}
                                />

                            </div>
                            <div className='col-lg-6'>
                                <TextField
                                    disabled
                                    name="name"
                                    value={formData?.name || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Name*"
                                    size="small"
                                    InputProps={{
                                        style: { Margin: "0px" }
                                    }}
                                />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg-6'>
                                <TextField
                                    disabled
                                    name="fname"
                                    value={formData?.fname || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Father’s/Guardian Name"
                                    size="small"
                                />
                            </div>
                            <div className='col-lg-6'>
                                <TextField
                                    disabled
                                    name="course"
                                    value={formData?.course || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Course"
                                    size="small"
                                    InputProps={{
                                        style: { Margin: "0px" }
                                    }}
                                />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg-6'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Gender*</InputLabel>
                                    <Select
                                        disabled
                                        name="gender"
                                        value={formData?.gender || ""}
                                        onChange={handleFormData}
                                        native
                                        label="Gender*"
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
                                    disabled
                                    name="dob"
                                    value={formData?.dob || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Date Of Birth*"
                                    size="small"
                                    // type="date"
                                    format="DD/MM/YYYY"
                                />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg-6'>
                                <TextField
                                    disabled
                                    name="cellno"
                                    value={formData?.cellno || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Cell No"
                                    size="small"
                                />
                            </div>
                            <div className='col-lg-6'>
                                <TextField
                                    disabled
                                    name="whatsappno"
                                    value={formData?.whatsappno || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="WhatsApp Number"
                                    size="small"
                                />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg-6'>
                                <TextField
                                    disabled
                                    name="email"
                                    value={formData?.email || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Email"
                                    size="small"
                                />
                            </div>
                            <div className='col-lg-6'>
                                <TextField
                                    disabled
                                    name="lasteducation"
                                    value={formData?.lasteducation || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Last Education"
                                    size="small"
                                />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-lg-6'>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            disabled
                                            name="zakat"
                                            checked={formData?.zakat}
                                            onClick={handleFormData}
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
                                            disabled
                                            name="ownlaptop"
                                            checked={formData?.ownlaptop}
                                            onClick={handleFormData}
                                        />
                                    }
                                    label="Do you have your own laptop?"
                                    sx={{ '& .MuiFormControlLabel-label': { fontSize: 12 } }}
                                />
                            </div>
                        </div>

                        <div className='row mt-5'>
                            <div className='col-lg-12 d-flex justify-content-end'>
                                {/* <button type='submit' className='buttonClass' onClick={(event) => props?.handleChange(event, 1)}> Next &#8250;</button> */}
                                <button type='submit' className='buttonClass' onClick={clickNextBtn}> Next &#8250;</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
