import { toast } from "react-toastify";
import "./toaster.css"


export const toastSuccess = (message) =>
  toast.success(message, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: { background: '#228B22' },
    progress: undefined

  });


export const toastInfo = (message) =>
  toast.info(message, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: { background: '#1F6992' },
  });


export const toastError = (message) =>
  toast.error(message, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const toastErrorCustomTime = (message, time) =>
  toast.error(message, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const toastWarn = (message) =>
  toast.warn(message, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: { background: '#F5A623', },
  });

const codeErrorWarn = (message) =>
  toast.error(message, {
    position: "bottom-right",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

/**
 * Succes Message 
 */
export const succesMessage = "Record Saved Successfully";
export const errorMessage = "Something Went Wrong";