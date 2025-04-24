// Libraries and dependencies
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Hooks
import useFetch from '../hooks/UseFetch.hook';

// Components and styles
import BannerContainer from '../components/features/ProvinceCityProfile/BannerContainer';
import InformationCard from '../components/features/ProvinceCityProfile/InformationCard';
import MunicipalityCard from '../components/features/ProvinceCityProfile/MunicipalityCard';
import styles from './ProvincePage.module.css';

/**
 * ProvincePage component that fetches data for a province and displays it using different components.
 * It includes a banner, information cards with tabs, and a list of municipalities.
 *
 * @returns {JSX.Element} - Rendered ProvincePage component
 */
function ProvincePage() {
  const { name: selectedProvince } = useParams();
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
        backgroundImage={provinceData.banner_image || '../../public/images/banner/default-banner.png'}
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