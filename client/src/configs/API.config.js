import axios from "axios";

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

export default api;