import React from 'react';
import { Link } from 'react-router-dom';

import ImageContainer from './ImageContainer';
import ProvinceName from '../Components/ProvinceName';
import ProvinceIntro from '../Components/ProvinceIntro';

import styles from '../CARContainer/ProvinceContainer.module.css';

/**
 * ProvinceContainer component displays a clickable card with an image, name, and introduction
 * of a province or city. Clicking the card navigates to a detailed route based on type and name.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.image - Image URL representing the province or city (default is an empty string)
 * @param {string} props.name - Name of the province or city (used for display and URL encoding)
 * @param {string} props.intro - Introductory text or short description about the province or city
 * @param {string} props.type - Type category (e.g., "Province" or "City") used for route generation
 * @returns {JSX.Element} A React component rendering a styled card with province details and a link
 */
function ProvinceContainer({ image = '', name = '', intro = '', type }) {
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
