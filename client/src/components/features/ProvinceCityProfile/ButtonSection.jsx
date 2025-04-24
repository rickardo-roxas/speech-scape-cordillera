import React from 'react';
import SectionButton from './SectionButton';
import styles from './ButtonSection.module.css';

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
