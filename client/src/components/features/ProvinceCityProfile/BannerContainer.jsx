import React from 'react';
import BannerInfo from './BannerInfo';
import styles from './BannerContainer.module.css';

const BannerContainer = ({ backgroundImage, title, description, type }) => {
  return (
    <div 
      className={styles.bannerContainer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.bannerOverlay}>
        <BannerInfo 
          title={title}
          description={description}
          type={type}
        />
      </div>
    </div>
  );
};

export default BannerContainer;