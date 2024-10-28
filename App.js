import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import axios from "axios";
import { router } from "./Route.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ClientId, LoginURL, Password, UserName } from "./utils/services.js";


export default function App() {
  const loginApi = () => {
    let body = {
      Data: {
        user: {
          username: UserName,
          password: Password,
          userclientid: ClientId,
        },
      },
    };

    axios
      .put(LoginURL, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response?.data?.Data?.Session?.token) {
          let token = response?.data?.Data?.Session?.token;
          localStorage.setItem("Token", JSON.stringify(token));
        }
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  useEffect(() => {
    loginApi();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer/>
    </>
  );
}
