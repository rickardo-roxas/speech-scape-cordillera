import React from 'react';
import Container from 'react-bootstrap/Container';

import styles from './TextContainer.module.css';

/**
 * Reusable TextContainer component that renders a container.
 * This component can be used to hold other components and/or text.
 * @param {object} param0 - Component props
 * @param {string} param0.title - Optional container header
 * @param {React.ReactNode} param0.children - Container body content. Can contain multiple elements.
 * @param {string} param0.className - Additional CSS classes
 * @returns {JSX.Element} - Rendered container component
 */
function TextContainer( {title, children, className = '', contentClassName = ''} ) {
    return (
        <Container className={`${styles.container} ${className}`}>
            {title &&
                <h3>
                    {title}
                </h3>
            }
            {children && (
                <div className={`${styles.content} ${contentClassName}`}>
                    {children}
                </div>
            )}
        </Container>
    );
}

export default TextContainer;