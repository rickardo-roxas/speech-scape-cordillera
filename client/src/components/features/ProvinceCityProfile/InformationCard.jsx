import React, { useState } from 'react';
import InfoCard from '../../layout/Cards/Card';
import Overview from './Overview';
import ButtonSection from './ButtonSection';
import Languages from './Languages';
import Ethnicity from './Ethnicity';
import Gallery from './Gallery';
import styles from './InformationCard.module.css';

function InformationCard() {
	const [activeTab, setActiveTab] = useState('Overview');

	// Sample data 
	const languagesData = [
		{ name: 'Kankanaey', percentage: 60 },
		{ name: 'Ibaloi', percentage: 30 },
		{ name: 'Ilocano', percentage: 10 },
	];

	const ethnicGroupData = [
		{ ethnic_group_name: 'Kankanaey', percentage: 60 },
		{ ethnic_group_name: 'Ibaloi', percentage: 30 },
		{ ethnic_group_name: 'Ilocano', percentage: 10 },
	];

	const galleryImages = [
		{ url: '../../../../public/images/Benguet/benguet_1.jpg', alt: 'Mountain view' },
		{ url: '../../../../public/images/Benguet/benguet_2.jpg', alt: 'City view' },
        { url: '../../../../public/images/Benguet/benguet_3.jpg', alt: 'City view' },
        { url: '../../../../public/images/Benguet/benguet_4.jpg', alt: 'City view' },
	];

	const renderContent = () => {
		switch (activeTab) {
			case 'Overview':
				return (
					<Overview
						title="Overview"
						description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						description2="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        description3="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>
				);
			case 'Languages':
				return (
					<div className={styles.grid}>
						<Languages languages={languagesData} />
						<Ethnicity ethnicGroups={ethnicGroupData} />
					</div>
				);
			case 'Gallery':
				return <Gallery title="Gallery" images={galleryImages} />;
			default:
				return null;
		}
	};

	return (
		<div>
			<InfoCard className={styles.card}>
				<div>
					<ButtonSection onClick={setActiveTab} activeTab={activeTab} />
					<div className={styles.content}>
						{renderContent()}
					</div>
				</div>
			</InfoCard>
		</div>
	);
}

export default InformationCard;
