// Libraries and dependencies
import React from 'react';

// Styles
import styles from './SectionTitle.module.css';

/**
 * SectionTitle component that renders a section title in an h2 element.
 *
 * @param {object} props - Component props
 * @param {string} props.title - Title text to display
 * @returns {JSX.Element} - Rendered SectionTitle component
 */
function SectionTitle({ title }) {
    return (
        <h2 className={styles.title}>
            {title}
        </h2>
    );
}

export default SectionTitle;
