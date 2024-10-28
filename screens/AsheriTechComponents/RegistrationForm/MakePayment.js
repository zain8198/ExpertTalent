import React, { useEffect, useState } from 'react';
import "../AdmissionEnquiery/AdmissionEnquiery.css";
import "./RegisterYourself.css"
import { FormControl, InputLabel, Select, TextField } from '@mui/material/node';
import { PostMethod, codeError, getMethod } from '../../../utils/services';
import { errorMessage, succesMessage, toastError, toastSuccess } from '../../../utils/Toaster/toaster';
const INITIAL_STATE = {
    paymentNo: "",
    paymentType: "",
}
export const MakePayment = (props) => {
    const [formData, setFormData] = useState({ ...INITIAL_STATE });
    const [globalObj, setGlobalObj] = useState(null);
    const [paymentData, setPaymentData] = useState([]);
    useEffect(() => {
        payemtMode();
    }, [])
    const payemtMode = () => {
        try {
            getMethod("lov/v2/list/FOCCU")
                .then((data) => {
                    if (data) {
                        setPaymentData(data?.Data);
                    }
                })
                .catch(error => {
                    codeError(error);
                });
        } catch (error) {
            console.log(error);
        }
    }
    const FeeGroupChallanApi = (Id) => {
        try {
            getMethod(`SMFeegrphdr/V2/FeeGroupsforChallanAT/9119/60/${Id}`)
                .then((data) => {
                    if (data) {
                        FeeAmountApi(data.Data[0].Id);
                    }
                })
                .catch(error => {
                    codeError(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    const FeeAmountApi = (feegrpid) => {
        try {
            getMethod(`SMFeeprofhdr/V2/feeamountAT/9119/${feegrpid}`)
                .then((data) => {
                    if (data) {
                        setGlobalObj(data.Data[0])
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
        if (!event) {
            return
        }
        const { name, value, } = event?.target;
        if(name === "paymentType") {
            FeeGroupChallanApi(value);
            setFormData((prevField) => ({
                ...prevField,
                [name]: value,
            }));
        }
        else{
            setFormData((prevField) => ({
                ...prevField,
                [name]: value,
            }));
        }
        
    }

    const clickGenerateBtn = () => {
      try {
        let bb = {
            "Data": {
              "SMFeechallandtls": [
                {
                  "feeid": globalObj?.feetype,
                  "amount": globalObj?.amount,
                  "netamount": globalObj?.amount,
                  "acadyrdtlid": 18946,
                  "month": "July",
                  "SMFeechallansubdtls": [],
                  "lineindex": 1
                },               
              ],
              "SMFeechallandiscounts": [],
              "challanno": null,
              "batchno": "0",
              "challandate": new Date(),
              "challanvalidity": new Date(),
              "duedate": new Date(),
              "entityid": "3256",
              "studentid": 220633,
              "ltxt": null,
              "amount": null,
              "feestatusid": null,
              "appid": null,
              "feeforid": 93,
              "acdyearid": 13601,
              "perioddtlid": 28038,
              "feegrpid": 14016,
              "feenatureid": 60,
              "discountid": null,
              "studentno": "ALBS000131",
              "grno": "ALBS000131",
              "revchln": null,
              "revdate": null,
              "revremarks": null,
              "transno": null,
              "beneficiaryno": null,
              "noofinst": null,
              "instamount": null,
              "ficoaid": null,
              "jvpost": null,
              "courseid": null,
              "sectionid": null
            },
            "DataAddon": {},
            "ReturnObject": true
          }
        PostMethod("Feechallanhdr/v2/", bb)
        .then((data) => {
            if (data) {
                toastSuccess(succesMessage);;
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
                                    disabled
                                    name="paymentNo"
                                    value={formData?.paymentNo || ""}
                                    onChange={handleFormData}
                                    className="w-100"
                                    id="outlined-controlled"
                                    label="Payment No"
                                    size="small"
                                />
                            </div>
                            <div className='col-lg-6'>
                                <FormControl variant="outlined" size="small" className='w-100'>
                                    <InputLabel htmlFor="outlined-age-native-simple">Payment Type</InputLabel>
                                    <Select
                                        name="paymentType"
                                        value={formData?.paymentType || ""}
                                        onChange={handleFormData}
                                        native
                                        label="Payment Type"
                                        inputProps={{
                                            name: 'paymentType',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value={0}></option>
                                        {
                                            paymentData && paymentData?.map((Val, index) => {
                                                return (<option key={index} value={Val.Id}>{Val.stxt}</option>)
                                            })
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-lg-12 d-flex justify-content-end'>
                                <button type="button" className="generateBtn" onClick={clickGenerateBtn}>Generate</button>
                            </div>
                        </div>

                        <div className='row mt-5'>
                            <div className='col-lg-12 d-flex justify-content-end'>
                                <button className='buttonClass mr-2' onClick={(event) => props?.handleChange(event, 0)}> &#8249; Previous</button>
                                <button type='submit' className='buttonClass' onClick={(event) => props?.handleChange(event, 2)}> Next &#8250;</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
