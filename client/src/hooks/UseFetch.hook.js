import { useState, useEffect, useCallback } from "react";
import api from "../configs/API.config";

/**
 * 
 * @param {string} url - API endpoint to fetch data from
 * @param {object} param1 - Options for the fetch request
 * @param {string} param1.method - HTTP method (default: "get")
 * @param {object} param1.data - Data to be sent with the request (default: null)
 * @param {object} param1.config - Additional configuration options (default: {})
 * @returns { data, loading, error, refetch } - Object containing the response data, loading state, error state, and a refetch function
 */
export default function useFetch(url, { method = "get", data = null, config = {} } = {}) {
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /**
     * Fetches data from the API using the provided URL and options.
     * Memoize fetchData to prevent unnecessary recreation on each render
     */
    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await api.request({
                url,
                method,
                data,
                ...config,
            });
            setResponseData(response.data);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [url, method, data, config]);

    useEffect(() => {
        fetchData();
    }, [fetchData]); 

    return { data: responseData, loading, error, refetch: fetchData };
}