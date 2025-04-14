import { useState, useEffect } from "react";
import api from "../configs/API.config";

/**
 * Fetch data from an API endpoint using Axios.
 * @param {url} url - The API endpoint to fetch data from.
 * @param {method,data,config} param1 - An object containing the method, data, and config for the request.
 * @returns {Object} - An object containing the response data, loading state, error state, and a refetch function.
 */
export default function useFetch(url, { method = "get", data = null, config = {} } = {}) {
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /**
     * Fetch data from the API.
     */
    const fetchData = async () => {
        setLoading(true); 
        try {
            const response = await api.request({
                url,
                method, // GET and POST
                data, // for POST
                ...config, // headers, params, etc.
            });
            setResponseData(response.data); // response.data is the data returned from the API
            setError(null); // clear any previous errors
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    /**
     * Fetch data when the component mounts or when dependencies change.
     */
    useEffect(() => {
        fetchData();
    }, [url, method, JSON.stringify(data), JSON.stringify(config)]);

    return { data: responseData, loading, error, refetch: fetchData };
}
