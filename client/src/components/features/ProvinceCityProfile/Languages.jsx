import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import SectionTitle from './SectionTitle';
import styles from './Languages.module.css';

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