import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from 'react-router-dom';

import { CiSearch } from "react-icons/ci";

import searchIcon from '../../../assets/icons/search_solid.png';
import Image from '../../ui/Image';
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
function SearchSuggestions({ results = [], type = '', loading = false, error = null }) {
    if (loading) {
        return (
            <div className={styles.container}>
                <ListGroup>
                    <ListGroup.Item className={styles.item}>
                        Loading...
                    </ListGroup.Item>
                </ListGroup>
            </div> 
        );
    }

    if (error) {
        return (
            <div className={styles.container}>
                <ListGroup>
                    <ListGroup.Item className={styles.item}>
                        Error fetching results.
                    </ListGroup.Item>
                </ListGroup>
            </div> 
        );
    }

    return (
        <div className={styles.container}>
            <ListGroup>
                {results.map((item, index) => (
                    <ListGroup.Item 
                        key={index} 
                        className={styles.item}
                        as={NavLink}
                        to={`/province-city/${type.toLowerCase()}/${encodeURIComponent(item.name)}`}
                    >
                        <CiSearch
                            className={styles.icon}
                        />
                        <span className={styles.text}>{item.name}</span>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default SearchSuggestions;