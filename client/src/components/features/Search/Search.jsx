import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { debounce } from 'lodash';

import useFetch from '../../../hooks/UseFetch.hook';
import SearchSuggestions from './SearchSuggestions';
import Image from '../../ui/Image';
import icon from '../../../assets/icons/search_solid.png';
import styles from './Search.module.css';


/**
 * Search feature component that renders a search input field and suggestions.
 * @returns {JSX.Element} - Rendered Search component
 */
function Search() {
    const [searchInput, setSearchInput] = useState('');
    const [debouncedSearchInput, setDebouncedSearchInput] = useState(searchInput);

    // Make API call when debounced input changes
    const { data, loading, error, refetch } = useFetch('/search/', {
        method: 'POST',
        auto: false
    });

    // Limit API call by 3000 ms
    const debouncedSearch = debounce((input) => {
        setDebouncedSearchInput(input);
    }, 3000);

    // Set state of searchInput upon user input
    const handleSearchChange = (e) => {
        const name = e.target.value;
        setSearchInput(name);
        debouncedSearch(name);
    }

    useEffect(() => {
        const trimmed = debouncedSearchInput.trim();

        if (trimmed !== '' || trimmed !== searchInput) {
            refetch({
                data: { q: trimmed}
            });
        }
    }, [debouncedSearchInput, refetch]);

    return (
        <Form className={styles.search}>
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
                        onChange={handleSearchChange}
                    />
                </InputGroup>
            </Form.Group>
 
            <SearchSuggestions 
                results = {data || []}
                loading={loading} 
                error={error}
            />
        </Form>
    );
}

export default Search;