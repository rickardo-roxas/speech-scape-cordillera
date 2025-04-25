import React from 'react';

// Libraries and dependencies
import ImageContainer from './ImageContainer';
import ProvinceName from '../Components/ProvinceName';
import ProvinceIntro from '../Components/ProvinceIntro';

import styles from './ProvinceContainer.module.css';
import AbraImage from '../Images/Abra.jpg';

function Abra() {
  return (
    <div className={styles.card}>
      {/* Top: Image Container */}
      <ImageContainer 
        src={AbraImage} 
        alt="Abra Landscape" 
        className={styles.imageSection}
      />

        {/* Bottom: Text Container */}
      <div className={styles.textSection}>
        <ProvinceName name="Abra" />
        <ProvinceIntro introText="Lorem ipsum chuchuchu jakdhaikjdhkahsdkjahlorem ipsum chuchuchu" />
      </div>
    </div>
  );
}

export default Abra;