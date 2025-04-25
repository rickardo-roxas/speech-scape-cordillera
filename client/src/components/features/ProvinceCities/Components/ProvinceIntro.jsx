import React from 'react';

import styles from './Intro.module.css';

/**
 * Displays a short introductory text for a province or city.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.introText="Lorem ipsum..."] - The introduction or description to display
 * @returns {JSX.Element} A styled intro section with text
 */

function ProvinceIntro({ introText = "Lorem ipsum..." }) {
    return (
      <div className={styles.intro}>
        <h1 className={styles.h1}>{introText}</h1>
      </div>
    );
  }
export default ProvinceIntro;
