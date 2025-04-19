import React, { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import SearchSuggestions from './SearchSuggestions';
import Image from '../../ui/Image';
import icon from '../../../assets/icons/search_solid.png';
import styles from './Search.module.css';

import useFetch from '../../../hooks/UseFetch.hook';
import useDebounce from '../../../hooks/useDebounce.hook';
import useClickOutside from '../../../hooks/useClickOutside.hook';

/**
 * Search feature component that renders a search input field and suggestions.
 * Uses internal custom hooks for debouncing and fetching.
 * @returns {JSX.Element} - Rendered Search component
 */
function Search(className='') {
    const [searchInput, setSearchInput] = useState(''); // input of user
    const [query, setQuery] = useState(''); // what will be sent to the API
    const [results, setResults] = useState([]); // search suggestions
    const ref = useRef(null);

    useDebounce(() => {
        const trimmed = searchInput.trim();
        if (trimmed) {
            const encoded = encodeURIComponent(trimmed);
            setQuery(encoded);
        }
    },  1000, [searchInput]);

    const { data, loading, error, refetch } = useFetch(`/search/?q=${query}`, {
        method: "GET",
    }, true);

    useEffect(() => {
        if (query) {
            refetch();
        }
    }, [query, refetch]);

    useEffect(() => {
        if (!data) {
            return;
        }

        if (data.data?.type === "City") {
            setResults(data.data.cities);
        } else if (data.data?.type === "Province") {
            setResults(data.data.provinces);
        } else {
            setResults([]);
        }
    }, [data]);

    const resetSearch = () => {
        setSearchInput('');
        setQuery('');
        setResults([]);
    };

    useClickOutside(ref, resetSearch);

    return (
        <div className={`${styles.wrapper} ${className}`}>
            <Form ref={ref} className={`${styles.search} ${className}`} onSubmit={(e) => e.preventDefault()}>
                <Form.Group>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1" className={styles.icon}>
                            <Image
                                src={icon}
                                alt="Search Icon"
                                width={20}
                                height={20}
                            />
                        </InputGroup.Text>
                        <Form.Control
                            type='text'
                            placeholder="Search province or city..."
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
                <SearchSuggestions
                    results = {results}
                    type={data?.data?.type} 
                    loading={loading} 
                    error={error}
                /> 
            </Form>
        </div>
    );
}

export default Search;