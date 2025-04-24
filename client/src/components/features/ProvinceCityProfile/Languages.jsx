// Libraries and dependencies
import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

// Components and styles
import SectionTitle from './SectionTitle';
import styles from './Languages.module.css';

/**
 * Languages component that renders a list of languages with their
 * respective percentage breakdowns using a progress bar.
 *
 * @param {object} props - Component props
 * @param {Array} props.languages - List of language objects to display
 * @param {string} props.languages[].name - Name of the language
 * @param {string|number} props.languages[].percentage - Percentage representation of the language
 * @returns {JSX.Element} - Rendered Languages component with progress bars
 */
function Languages({ languages }) {
	return (
		<div className={styles.languages}>
			<SectionTitle title="Languages" />
			{languages.map((language, index) => (
				<div key={index}>
					<ProgressBar className={styles.customProgress}>
						<ProgressBar className={styles.customProgressLanguage}
							now={Number(language.percentage) + 16} 
							variant="success" 
							label={`${language.name}`} 
						/>
						<ProgressBar className={styles.customProgressPercent}
							now={100 - Number(language.percentage)} 
							label={`${language.percentage}%`} 
						/>
					</ProgressBar>
				</div>
			))}
		</div>
	);
}

export default Languages;