import React from 'react';
import SectionButton from './SectionButton';
import styles from './ButtonSection.module.css';

/**
 * ButtonSection component that renders a group of section tabs 
 * (e.g., Overview, Languages, Gallery). 
 * Highlights the active tab and triggers a callback when a tab is clicked.
 *
 * @param {object} props - Component props
 * @param {function} props.onClick - Callback when a tab is clicked, receives the tab label
 * @param {string} props.activeTab - Label of the currently active tab
 * @returns {JSX.Element} - Rendered ButtonSection component
 */
function ButtonSection({ onClick, activeTab }) {
	const tabs = ['Overview', 'Languages', 'Gallery'];

	return (
		<div className={styles.buttonGroup}>
			{tabs.map((label) => (
				<SectionButton
					key={label}
					label={label}
					onClick={() => onClick(label)}
					isActive={activeTab === label}
				/>
			))}
		</div>
	);
}

export default ButtonSection;