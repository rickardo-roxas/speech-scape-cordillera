import React from 'react';
import styles from './Region.module.css';

function RegionName({ regionName = "Region Name" }) {
  return (
    <div className={styles.regionTag}>
      <h1>{regionName}</h1>
    </div>
  );
}

export default RegionName;
