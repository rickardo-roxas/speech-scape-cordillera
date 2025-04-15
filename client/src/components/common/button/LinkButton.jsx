import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

/**
 * Reusable LinkButton component that renders a button with a link.
 * Used for navigation purposes.
 * @param {Object}} param0 - Component props
 * @param {string} param0.label - Button label
 * @param {string} param0.to - URL to link to
 * @param {string} param0.className - Additional CSS classes
 * @returns {JSX.Element} - Rendered LinkButton component
 */
function LinkButton({ label = "LinkButton", to = "/", className = "" }) {
    return (
        <Link to={to} className={className}>
            <Button
                variant="primary"
                className={`${styles['link-button']} ${className}`}
            >
                {label}
            </Button>
        </Link>
    );
}

export default LinkButton;