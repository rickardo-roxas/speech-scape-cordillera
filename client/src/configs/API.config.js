import axios from "axios";
import { toast } from 'react-toastify';

/**
 * Establishes a connection to the API using Axios.
 */
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

/**
 * Handles toast notifications when making a request to the API.
 */
api.interceptors.response.use(
    res => res,
    err => {
        const message = err?.response?.data?.message || "Something went wrong";
        toast.error(message);
        return Promise.reject(err);
    }
);  

export default api;