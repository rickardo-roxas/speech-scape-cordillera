import React from 'react';
import styles from './Region.module.css';

/**
 * Displays the name of a region as a heading within a styled container.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.regionName="Region Name"] - The name of the region to display
 * @returns {JSX.Element} A styled container with a region heading
 */

function RegionName({ regionName = "Region Name" }) {
  return (
    <div className={styles.regionTag}>
      <h1>{regionName}</h1>
    </div>
  );
}

export default RegionName;
