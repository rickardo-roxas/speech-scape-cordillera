import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components and Styles
import CityInfoCard from '../components/features/ProvinceCityProfile/CityInfoCard';
import BarangayCard from '../components/features/ProvinceCityProfile/BarangayCard';
import BannerContainer from '../components/features/ProvinceCityProfile/BannerContainer';
import styles from './CityPage.module.css';

// Hooks
import useFetch from '../hooks/UseFetch.hook';

function CityPage() {
  const { name: cityName } = useParams();
  const [cityData, setCityData] = useState(null);
  const [activeTab, setActiveTab] = useState('Overview');

  const { data, refetch } = useFetch(`/map/city/${cityName}`, {
    method: 'GET',
  }, false);

  useEffect(() => {
    if (cityName) {
      refetch();
    }
  }, [cityName, refetch]);

  useEffect(() => {
    if (data && data.success && data.data) {
      setCityData(data.data);
    }
  }, [data]);

  if (!cityData) return null;

  const overviewData = {
    description1: cityData.info_1 || '',
    description2: cityData.info_2 || '',
    description3: cityData.info_3 || '',
  };

  // Normalize languages to an array
  const rawLanguages = cityData.languages;
  const languagesArray = Array.isArray(rawLanguages)
    ? rawLanguages
    : rawLanguages
      ? [rawLanguages]
      : [];

  const languagesData = languagesArray.map(lang => ({
    name: lang.name,
    percentage: parseFloat(lang.percentage),
  }));

  const ethnicGroupData = (cityData.ethnic_groups || []).map(group => ({
    ethnic_group_name: group.ethnic_group_name,
    percentage: parseFloat(group.percentage),
  }));
  
  const galleryImages = (cityData.images || []).map((url, index) => ({
    url,
    alt: `Image ${index + 1}`,
  }));

  return (
    <div>
      <BannerContainer
        backgroundImage={cityData.banner_image || '../../public/images/banner/default-banner.png'}
        title={cityData.name}
        description={cityData.description || 'No description available.'}
        type="City"
      />
      <div className={styles.container}>
        <CityInfoCard
          activeTab={activeTab}
          onTabChange={setActiveTab}
          overviewData={overviewData}
          languagesData={languagesData}
          ethnicGroupData={ethnicGroupData}
          galleryImages={galleryImages}
        />
        <BarangayCard
          barangays={cityData.barangays || []}
        />
      </div>
    </div>
  );
}

export default CityPage;
