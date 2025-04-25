import React from 'react';
import styles from './ProvinceImage.module.css';


function ImageContainer({
  src,
  alt = "",
  width = "100%",
  height = "200px", // Default height for consistency
  className = "",
}) {
  return (
    <div className={`${styles.container} ${className}`} style={{ width, height }}>
      <img 
        src={src} 
        alt={alt || "Province image"} 
        className={styles.image}
      />
    </div>
  );
}

export default ImageContainer;