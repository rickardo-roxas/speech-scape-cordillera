import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from 'react-router-dom';

import styles from './SearchSuggestions.module.css';

/**
 * Renders search suggestions under List Groups. 
 * Each item in the list group is a navigation link that will redirect to the province-city page of that specific location.
 * @param {object} param0 - Component props
 * @param {array} param0.results - The results of the user input
 * @param {Boolean} param0.loading - Flag to indicate if result is being queried.
 * @param {String} param0.error - Error object.
 * @returns {JSX.Element} - Rendered search suggestion component.
 */
function SearchSuggestions({ results = [], loading = false, error = null }) {
    if (loading) {
        return (
            <ListGroup>
                <ListGroup.Item className={styles.item}>
                    Loading...
                </ListGroup.Item>
            </ListGroup>
        );
    }

    if (error) {
        return (
            <ListGroup>
                <ListGroup.Item className={styles.item}>
                    Error fetching results.
                </ListGroup.Item>
            </ListGroup>
        );
    }

    if (results.length === 0) {
        return (
            <ListGroup>
                <ListGroup.Item className={styles.item}>
                    No results found.
                </ListGroup.Item>
            </ListGroup>
        );
    }

    return (
        <ListGroup>
            {results.map((item, index) => (
                <ListGroup.Item 
                    key={index} 
                    className={styles.item}
                    as={NavLink}
                    to={`/province-city/${item.name}`}
                >
                    {item.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default SearchSuggestions;