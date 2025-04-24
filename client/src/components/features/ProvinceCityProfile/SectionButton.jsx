// Libraries and dependencies
import React from 'react';

// Styles
import styles from './SectionButton.module.css';

/**
 * SectionButton component that displays a button with an active state.
 * The button will apply an "active" style if the `isActive` prop is true.
 *
 * @param {object} props - Component props
 * @param {string} props.label - Text to display on the button
 * @param {function} props.onClick - Function to handle button click events
 * @param {boolean} props.isActive - Determines if the button should be styled as active
 * @returns {JSX.Element} - Rendered SectionButton component
 */
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