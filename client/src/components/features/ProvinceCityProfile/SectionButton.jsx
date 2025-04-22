import React from 'react';
import styles from './SectionButton.module.css';

function SectionButton({ label, onClick }) {
    return (
        <button className={styles.secButton} onClick={onClick}>
            {label}
        </button>
    );
}

export default SectionButton;