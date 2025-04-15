// Libraries
import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';

// Local
import Image from '../../ui/Image';
import icon from '../../../assets/icons/search_solid.png';

import styles from './Search.module.css';

/**
 * Reusable Search component that renders a search input field and suggestions.
 * @returns {JSX.Element} - Rendered Search component
 */
function Search() {
    return (
        <Form className={styles.search}>
            <InputGroup className="">
                <InputGroup.Text id="basic-addon1" className={styles.icon}>
                    <Image
                        src={icon}
                        alt="Search Icon"
                        width={20}
                        height={20}
                    />
                </InputGroup.Text>
                <Form.Control
                    placeholder="Search province or city..."
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            {/* Search suggestions here */}
        </Form>
    );
}

export default Search;