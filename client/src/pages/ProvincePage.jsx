import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/UseFetch.hook';

import BannerContainer from '../components/features/ProvinceCityProfile/BannerContainer';
import InformationCard from '../components/features/ProvinceCityProfile/InformationCard';
import MunicipalityCard from '../components/features/ProvinceCityProfile/MunicipalityCard';

import styles from './ProvincePage.module.css';

function ProvincePage() {
  const [selectedProvince] = useState('Apayao'); // Put province here for testing
  const [provinceData, setProvinceData] = useState(null);
  const [activeTab, setActiveTab] = useState('Overview');

  const { data, refetch } = useFetch(`/map/province/${selectedProvince}`, {
    method: 'GET',
  }, false);

  useEffect(() => {
    if (selectedProvince) {
      refetch();
    }
  }, [selectedProvince, refetch]);

  useEffect(() => {
    if (data && data.success && data.data) {
      setProvinceData(data.data);
    }
  }, [data]);

  if (!provinceData) return null;

  const overviewData = {
    description1: provinceData.info_1 || '',
    description2: provinceData.info_2 || '',
    description3: provinceData.info_3 || '',
  };

  const languagesData = (provinceData.languages || []).map(lang => ({
    name: lang.name,
    percentage: parseFloat(lang.percentage),
  }));

  const ethnicGroupData = (provinceData.ethnic_groups || []).map(group => ({
    ethnic_group_name: group.ethnic_group_name,
    percentage: parseFloat(group.percentage),
  }));

  const galleryImages = (provinceData.images || []).map((url, index) => ({
    url,
    alt: `Image ${index + 1}`,
  }));

  const municipalities = provinceData.municipalities || [];

  return (
    <div>
      <BannerContainer
        backgroundImage={provinceData.banner_image || '/images/default-banner.jpg'}
        title={provinceData.name}
        description={provinceData.description || 'No description available.'}
        type="Province"
      />
      <div className={styles.container}>
        <InformationCard
          activeTab={activeTab}
          onTabChange={setActiveTab}
          overviewData={overviewData}
          languagesData={languagesData}
          ethnicGroupData={ethnicGroupData}
          galleryImages={galleryImages}
        />
        <MunicipalityCard municipalities={municipalities} />
      </div>
    </div>
  );
}

export default ProvincePage;
