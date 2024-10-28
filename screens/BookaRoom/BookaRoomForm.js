import React, { useEffect, useState } from 'react';
import "./form.css";
import { Checkbox, FormControl, FormControlLabel, InputLabel, Select, TextField } from '@mui/material/node';
import { PostMethod, codeError, formatDate, getMethod } from '../../utils/services';
import TabsComponent from '../../components/Tabs/Tabs';
import { errorMessage, succesMessage, toastError, toastSuccess } from '../../utils/Toaster/toaster';
// import { ToastContainer } from 'react-toastify';
// import { Toaster, Toastersuccess } from '../../Toaster';

const INITIAL_STATE = {
    fname: "",
    pemail: "",
    oemail: "",
    cnicno: "",
    cname: "",
    pbooking: "",
    query: "",


}
export const BookaRoomForm = (props) => {
    const [formData, setFormData] = useState({ ...INITIAL_STATE })
    const [errors, setErrors] = useState({});
    const [courses, setCourses] = useState([]);
    const [EntityId, setEntityId] = useState(0)

    const handleFormData = (event) => {
        if (!event) {
            return
        }
        const { name, value, type } = event?.target;
        setErrors({})
        if (name === "cnicno") {
            const value = event.target.value.replace(/\D/g, ''); // Remove all non-digit characters
            let formattedValue = value;

            if (value.length > 5 && value.length <= 12) {
                formattedValue = `${value.slice(0, 5)}-${value.slice(5, 12)}`;
            } else if (value.length > 12) {
                formattedValue = `${value.slice(0, 5)}-${value.slice(5, 12)}-${value.slice(12, 13)}`;
            } else {
                formattedValue = value.slice(0, 5);
            }
            setFormData((prevField) => ({
                ...prevField,
                [name]: formattedValue,
            }));
        }
        else {
            setFormData((prevField) => ({
                ...prevField,
                [name]: value,
            }));
        }

    }

    const emailValidation = (field = '', event) => {
        if (!event) {
            return;
        }
        const { value, name } = event.target;
        if (value?.trim() === "") {
            return;
        }
        if (isValidEmail(field, value)) {
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
                        "courseid": +formData.courses,
                        "genderid": formData.gender,
                        "childname": formData.fname + formData.lname,
                        "studentstatus": formData.stdStatus,
                        "ownlaptop": formData.ownlaptop,
                        "whatsappno": formData.whatsappno,
                        "email": formData.email,
                        "cellno": formData.cellno,
                        "lasteducation": formData.lasteducation,
                        "dob": formData?.dob,
                        "ezakat": formData?.zakat
                    }
                ],
                //   "noofchild": 1,
                "enquiryno": null,
                "fname": formData.fname,
                "pemail": formData.pemail,
                "oemail": formData.oemail,
                "cnicno": formData.cnicno,
                "cname": formData.cname,
                "query": formData.query,
                "pbooking": formData.pbooking,

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

    function isValidEmail(field, value) {
        // Define the regular expression for a valid email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(value);

        return isValidEmail;
        // Test the email against the regex

    }


    const RequiredFields = () => {
        try {
            let validationErrors = {}
            if (!formData.fname) {
                validationErrors.fname = 'First Name is required';
            }
            if (!formData.pemail) {
                validationErrors.email = 'Personal Email is required';
            }
            if (!formData.oemail) {
                validationErrors.email = 'Official Email is required';
            }
            if (!formData.cnicno) {
                validationErrors.cnicno = 'CNIC is required';
            }
            if (!formData.query) {
                validationErrors.query = 'Query is required';
            }
            if (!formData.cname) {
                validationErrors.cname = 'Company is required';
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
                    sendfrom: "zusama729@gmail.com",
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
                        <h2 className="text-center">Enquiry Form</h2>
                        <div className='row'>
                            <div className='col-12 col-lg-6'>
                                <TextField
                                    className="w-100 form_textField"
                                    id="outlined-controlled"
                                    label="Full Name"
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

                        </div>

                        <div className='row mt-lg-3 mt-0'>

                            <div className='col-lg-6'>
                                <TextField
                                    className="w-100 form_textField"
                                    id="outlined-controlled"
                                    label="Personal Email"
                                    size="small"
                                    name="pemail"
                                    value={formData?.pemail || ""}
                                    onChange={handleFormData}
                                    onBlur={(event) => emailValidation('pemail', event.target.value)}
                                    error={!!errors.pemail}
                                // helperText={errors.email || ''}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <TextField
                                    className="w-100 form_textField"
                                    id="outlined-controlled"
                                    label="Official Email"
                                    size="small"
                                    name="oemail"
                                    value={formData?.oemail || ""}
                                    onChange={handleFormData}
                                    onBlur={(event) => emailValidation('oemail', event.target.value)}
                                    error={!!errors.oemail}
                                // helperText={errors.email || ''}
                                />
                            </div>
                        </div>

                        <div className='row mt-lg-3 mt-0'>

                            <div className='col-lg-6'>
                                <TextField
                                    className="w-100 form_textField"
                                    id="outlined-controlled"
                                    label="Company Name"
                                    size="small"
                                    name="cname"
                                    value={formData?.cname || ""}
                                    onChange={handleFormData}
                                    error={!!errors.cname}
                                // helperText={errors.email || ''}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <TextField
                                    className="w-100 form_textField"
                                    id="outlined-controlled"
                                    label="Purpose of Booking"
                                    size="small"
                                    name="pbooking"
                                    value={formData?.pbooking || ""}
                                    onChange={handleFormData}
                                    error={!!errors.pbooking}
                                // helperText={errors.email || ''}
                                />
                            </div>
                        </div>
                        <div className='row mt-lg-3 mt-0'>
                            <div className='col-lg-12'>
                                <TextField
                                    className="w-100 form_textField"
                                    id="outlined-controlled"
                                    label="Query"
                                    size="small"
                                    name="query"
                                    value={formData?.query || ""}
                                    onChange={handleFormData}
                                    error={!!errors.query}
                                // helperText={errors.email || ''}
                                />
                            </div>
                        </div>

                        <div className='row mt-lg-3 mt-0'>
                            <div className='col-lg-12'>
                                <p className='text-center'>For Customized Inquiries, please contact Talha Shabbir at <a>tshabbir@ashreitech.com</a> or +923218747595 </p>
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
