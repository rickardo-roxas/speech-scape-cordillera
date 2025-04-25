import React from 'react';
import styles from './ProvinceImage.module.css';

/**
 * Renders an image within a styled container, allowing customization of size and additional styles.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.src - The image source URL
 * @param {string} [props.alt=""] - Alternative text for the image (used for accessibility)
 * @param {string} [props.width="100%"] - Width of the image container
 * @param {string} [props.height="200px"] - Height of the image container (default is 200px)
 * @param {string} [props.className=""] - Additional class names for styling the container
 * @returns {JSX.Element} A responsive image wrapped in a styled container
 */

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