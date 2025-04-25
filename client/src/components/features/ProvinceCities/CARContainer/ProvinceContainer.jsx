import React from 'react';
import { Link } from 'react-router-dom';

import ImageContainer from './ImageContainer';
import ProvinceName from '../Components/ProvinceName';
import ProvinceIntro from '../Components/ProvinceIntro';

import styles from '../CARContainer/ProvinceContainer.module.css';

/**
 * 
 * @param {*} param0 
 * @returns 
 */
function ProvinceContainer({ image='', name='', intro='', type }) {
  return (
    <Link
      to={`/province-city/${type.toLowerCase()}/${encodeURIComponent(name)}`}
    >
      <div className={styles.card}>
        <ImageContainer 
          src={image} 
          alt={`${name} Landscape`} 
          className={styles.imageSection}
        />
        <div className={styles.textSection}>
          <ProvinceName 
            name={name}
            type={type}
          />
          <ProvinceIntro introText={intro} />
        </div>
      </div>
    </Link>
  );
}

export default ProvinceContainer;
