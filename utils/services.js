import axios from "axios";

export const ClientId = 164;
/* Login Credentials */
export const UserName = "atadmin";
export const Password = "atadmin123";

export const LoginURL = 'https://uta.edu-man.com/ut/api/utuser/v2/loginV3';

const URL = 'https://sma.edu-man.com/sm/api/';         // For Live Connection
// const URL = 'http://172.23.0.246:4324/smdev/api/'; // For BE Local Connection

export const getMethod = async (method) => {
  try {
    const response = await axios.get(URL + method, {
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching service:', error);
    throw error;
  }
};

export const PostMethod = async (method, data) => {
  try {
    const response = await axios.post(
      URL + method,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`
        },
      });
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

export const codeError = (error) => {
  console.log("ERROR", error)
}

export function formatDate(date) {
  const today = new Date(date);
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
}

export const PhoneMasking = (value) => {
  if (!value) {
    return
  }
  const digits = value.replace(/\D/g, '');
  let formattedValue = '';
  if (digits.length > 0) {
    formattedValue = digits.slice(0, 4);
  }
  if (digits.length > 4) {
    formattedValue += '-' + digits.slice(4, 11);
  }
  return formattedValue;
}

export const cnicMasking = (value) => {
  if (!value) {
    return;
  }
  const getvalue = value.replace(/\D/g, ''); // Remove all non-digit characters
  let formattedValue = getvalue;
  if (getvalue.length > 5 && getvalue.length <= 12) {
    formattedValue = `${getvalue.slice(0, 5)}-${getvalue.slice(5, 12)}`;
  } else if (getvalue.length > 12) {
    formattedValue = `${getvalue.slice(0, 5)}-${getvalue.slice(5, 12)}-${getvalue.slice(12, 13)}`;
  } else {
    formattedValue = getvalue.slice(0, 5);
  }
  return formattedValue;
}







