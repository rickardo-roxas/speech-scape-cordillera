// Libraries and dependencies
import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/UseFetch.hook';

// Components
import BannerContainer from '../components/features/ProvinceCityProfile/BannerContainer';
// import styles from './ProvincePage.module.css';
import InformationCard from '../components/features/ProvinceCityProfile/InformationCard';

/**
 * Displays the province or city information.
 * @returns {JSX.Element}
 */
function ProvincePage() {
    const [selectedProvince] = useState('Benguet');
    const [provinceData, setProvinceData] = useState(null);

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

    return (
        <div>
            {provinceData && (
                <BannerContainer
                    backgroundImage={provinceData.banner_image || 'placeholder.jpg'}
                    title={provinceData.name}
                    description={provinceData.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                    type="Province"
                />
            )}
            <InformationCard />
        </div>
    );
}

export default ProvincePage;