import React from 'react';
import Container from 'react-bootstrap/Container';

import styles from './TextContainer.module.css';

/**
 * Reusable TextContainer component that renders a container with a title and content.
 * @param {object} param0 - Component props
 * @param {string} param0.title - Optional card header
 * @param {React.ReactNode} param0.children - Card body content. Can contain multiple elements.
 * @param {string} param0.className - Additional CSS classes
 * @returns {JSX.Element} - Rendered card component
 */
function TextContainer( {title, children, className = '' } ) {
    return (
        <Container className={`${styles.container} ${className}`}>
            {title &&
                <h3>
                    {title}
                </h3>
            }
            {children && (
                <div className={styles.content}>
                    {children}
                </div>
            )}
        </Container>
    );
}

export default TextContainer;