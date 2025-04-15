import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';

/**
 * Reusable Search component that renders a search input field and suggestions.
 * @returns {JSX.Element} - Rendered Search component
 */
function Search() {
    return (
        <Form>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
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