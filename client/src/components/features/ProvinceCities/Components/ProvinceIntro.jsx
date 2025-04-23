import React from 'react';

import styles from './Intro.module.css';

function ProvinceIntro({ introText = "Lorem ipsum..." }) {
    return (
      <div className={styles.intro}>
        <h1 className={styles.h1}>{introText}</h1>
      </div>
    );
  }
export default ProvinceIntro;
