import React from 'react';
import InfoCard from '../../layout/Cards/Card';
import ButtonSection from './ButtonSection';
import Overview from './Overview';
import Languages from './Languages';
import Ethnicity from './Ethnicity';
import Gallery from './Gallery';
import styles from './InformationCard.module.css';

function InformationCard({
  activeTab,
  onTabChange,
  overviewData,
  languagesData,
  ethnicGroupData,
  galleryImages
}) {
  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <Overview
            title="Overview"
            description1={overviewData.description1}
            description2={overviewData.description2}
            description3={overviewData.description3}
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
    <InfoCard className={styles.card}>
      <ButtonSection onClick={onTabChange} activeTab={activeTab} />
      <div className={styles.content}>
        {renderContent()}
      </div>
    </InfoCard>
  );
}

export default InformationCard;
