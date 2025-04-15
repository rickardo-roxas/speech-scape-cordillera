import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';

import Image from '../../ui/Image';
import styles from './Search.module.css';

/**
 * Reusable Search component that renders a search input field and suggestions.
 * @returns {JSX.Element} - Rendered Search component
 */
function Search({ className = "" }) {
    return (
        <Form className={`${styles['search']} ${className}`}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                    <Image
                        src="../../../public/icons/search_solid.png"
                        alt="Search Icon"
                        width={20}
                        height={20}
                    />
                </InputGroup.Text>
                <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            {/* Search suggestions here */}
        </Form>
    );
}

export default Search;