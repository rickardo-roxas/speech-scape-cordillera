import React from 'react';
import BannerInfo from './BannerInfo';
import styles from './BannerContainer.module.css';

/**
 * BannerContainer component that renders a banner with a background image
 * and overlays content provided via the BannerInfo component.
 *
 * @param {object} props - Component props
 * @param {string} props.backgroundImage - URL of the background image
 * @param {string} props.title - Title text displayed in the banner
 * @param {string} props.description - Description text below the title
 * @param {string} props.type - Type or category label used in BannerInfo
 * @returns {JSX.Element} - Rendered BannerContainer component
 */
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