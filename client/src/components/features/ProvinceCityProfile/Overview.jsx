import React from 'react';
import SectionTitle from './SectionTitle';
import styles from './Overview.module.css';

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