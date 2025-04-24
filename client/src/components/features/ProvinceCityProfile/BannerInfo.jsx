import React from 'react';
import TypeTag from './TypeTag';
import styles from './BannerInfo.module.css';

/**
 * ProvinceBannerInfo component that displays a title, description, 
 * and a category/type tag—typically used within a banner.
 *
 * @param {object} props - Component props
 * @param {string} props.title - The main heading text
 * @param {string} props.description - Supporting text under the title
 * @param {string} props.type - Type or category label displayed via TypeTag
 * @returns {JSX.Element} - Rendered ProvinceBannerInfo component
 */
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