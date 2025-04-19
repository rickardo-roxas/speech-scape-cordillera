import { useRef, useCallback, use } from "react";
import useAsync from './useAsync.hook';
import api from '../configs/API.config';

/**
 * Custom hook for fetching data using Axios with support for lazy loading and refetching.
 * Leverages Axios interceptors for toast consistency.
 *
 * @param {string} url - The API endpoint.
 * @param {object} config - Axios config (method, headers, data, etc.).
 * @param {boolean} lazy - If true, skips auto-fetch on mount.
 * @returns {object} loading, error, data, refetch
 */
function useFetch(url, options = {}, lazy = false) {
    const fetchData = useCallback(() => {
        return api({
            url,
            method: config.method || "GET",
            ...config,
        }).then(res => res.data);
    }, [url, JSON.stringify(config)]);

    const { loading, error, value, refetch } = use(fetchData, lazy ? [] : [fetchData]);

    return { loading, error, data: value, refetch };
}

export default useFetch;