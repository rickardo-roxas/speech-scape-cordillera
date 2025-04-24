import React from 'react';
import styles from './SectionButton.module.css';

function SectionButton({ label, onClick, isActive }) {
	return (
		<button
			className={`${styles.secButton} ${isActive ? styles.active : ''}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
}

export default SectionButton;
