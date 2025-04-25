import React, { useState, useEffect } from 'react';

import useFetch from '../hooks/UseFetch.hook';
import RegionName from '../components/features/ProvinceCities/Components/RegionName';
import ProvinceContainer from '../components/features/ProvinceCities/CARContainer/ProvinceContainer';

import styles from './ProvincesAndCitiesPage.module.css';

/**
 * This component fetches and displays a list of provinces and cities under the 
 * Cordillera Administrative Region. It uses a custom `useFetch` hook to retrieve data 
 * from the `/province-city/` endpoint and renders the information as clickable cards.
 *
 * @component
 * @returns {JSX.Element} The rendered provinces and cities page.
 */

function ProvincesAndCitiesPage() {
  const [locations, setLocations] = useState(null);

  // Fetch province and city data using a custom hook
  const { data } = useFetch('/province-city/', {
    method: "GET",
  }, false);

  // Process fetched data and separate into cities and provinces
  useEffect(() => {
    if (data && data.success && data.data) {
      const details = data.data;
      setLocations({
        cities: details.cities,
        provinces: details.provinces,
      });
    }
  }, [data, setLocations]);

  return (
    <div className={styles.MainContainer}>
      {/* Region title/header */}
      <div className={styles.RegionContainer}>
        <RegionName regionName="Cordillera Administrative Region" />
      </div>

      {/* List of provinces and cities rendered as cards */}
      {locations && (
        <div className={styles.ProvinceContainer}>
          {locations.provinces.map((province, index) => (
            <ProvinceContainer
              key={index}
              image={province.images.find(img => img.includes('card_banner_'))}
              name={province.name}
              intro={province.intro}
              type="Province"
            />
          ))}
          {locations.cities.map((city, index) => (
            <ProvinceContainer
              key={index}
              image={city.images.find(img => img.includes('card_banner_'))}
              name={city.name}
              intro={city.intro}
              type="City"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProvincesAndCitiesPage;
