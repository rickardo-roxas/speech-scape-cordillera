// Libraries and dependencies
import React from 'react';

// Components and styles
import SectionTitle from './SectionTitle';
import styles from './Overview.module.css';

/**
 * Overview component that displays a title followed by three descriptions
 * as paragraphs.
 *
 * @param {object} props - Component props
 * @param {string} props.title - Title displayed above the descriptions
 * @param {string} props.description1 - First description text
 * @param {string} props.description2 - Second description text
 * @param {string} props.description3 - Third description text
 * @returns {JSX.Element} - Rendered Overview component with three paragraphs
 */
function Overview({ title, description1, description2, description3 }) {
    return (
        <div className={styles.overview}>
            <SectionTitle title={title} />
            <p>{description1}</p>
            <p>{description2}</p>
            <p>{description3}</p>
        </div>
    );
}

export default Overview;