import React from 'react';
import ImageContainer from './ImageContainer';
import ProvinceName from '../Components/ProvinceName';
import ProvinceIntro from '../Components/ProvinceIntro';

import styles from '../CARContainer/ProvinceContainer.module.css';

function ProvinceContainer({ image, name, intro }) {
  return (
    <div className={styles.card}>
      <ImageContainer 
        src={image} 
        alt={`${name} Landscape`} 
        className={styles.imageSection}
      />
      <div className={styles.textSection}>
        <ProvinceName name={name} />
        <ProvinceIntro introText={intro} />
      </div>
    </div>
  );
}

export default ProvinceContainer;
