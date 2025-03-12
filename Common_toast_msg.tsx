//setup
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

<ToastContainer autoClose={5000} position='top-right'/>

// common function 
import { toast } from "react-toastify";
export const toastSuccess = (message: string) => toast.success(message);
export const toastError = (errorMessage: string) => toast.error(errorMessage);

// use
toastSuccess("Created Successfully")
