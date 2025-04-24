import React from 'react';
import TypeTag from './TypeTag';
import styles from './BannerInfo.module.css';

const ProvinceBannerInfo = ({ title, description, type }) => {
  return (
    <div className={styles.bannerInfo}>
      <h1 className={styles.bannerTitle}>{title}</h1>
      <p className={styles.bannerDescription}>{description}</p>
      <TypeTag type={type} />
    </div>
  );
};

export default ProvinceBannerInfo;