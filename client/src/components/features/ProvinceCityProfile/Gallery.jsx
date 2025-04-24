// Libraries and dependencies
import React from 'react';

// Components and styles
import SectionTitle from './SectionTitle';
import styles from './Gallery.module.css';

/**
 * Gallery component that displays a grid of images with a section title.
 *
 * @param {object} props - Component props
 * @param {string} props.title - Title displayed above the gallery
 * @param {Array} props.images - Array of image objects to display
 * @param {string} props.images[].url - Image source URL
 * @param {string} props.images[].alt - Alt text for the image
 * @returns {JSX.Element} - Rendered Gallery component
 */
function Gallery({ title, images }) {
	return (
		<div className={styles.gallery}>
			<SectionTitle title={title} />
			<div className={styles.grid}>
				{images.map((image, index) => (
					<div key={index} className={styles.imageContainer}>
						<img src={image.url} alt={image.alt} className={styles.image} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Gallery;
