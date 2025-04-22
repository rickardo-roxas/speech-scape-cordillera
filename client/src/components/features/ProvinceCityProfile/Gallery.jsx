import React from 'react';
import styles from './Gallery.module.css';
import SectionTitle from './SectionTitle';

function Gallery({ title, images }) {
    return (
        <div className={styles.gallery}>
            <SectionTitle title={title} />
            {images.map((image, index) => (
                <div key={index} className={styles.imageContainer}>
                    <img src={image.url} alt={image.alt} className={styles.image} />
                </div>
            ))}
        </div>
    );
}

export default Gallery;
