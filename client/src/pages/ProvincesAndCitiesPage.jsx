import React from 'react';
import styles from './ProvincesAndCitiesPage.module.css';

import RegionName from '../components/features/ProvinceCities/Components/RegionName';
import ProvinceContainer from '../components/features/ProvinceCities/CARContainer/ProvinceContainer';

function ProvincesAndCitiesPage() {
  /* 
  Sample placeholder data used solely for visualizing the card layout.
  Replace this with actual data fetching logic or dynamic content as needed.
*/
  const provinces = [
    {
      id: 1,
      name: 'Abra',
      image: '/images/Abra/card_banner_abra.jpg',
      intro: 'Lorem ipsum chuchuchu jskdhakjdhkahsdkjahlorem ipsum chuchuchu',
    },
    {
      id: 2,
      name: 'Apayao',
      image: 'images/Apayao/card_banner_apayao.jpg',
      intro: 'Lorem ipsum chuchuchu jskdhakjdhkahsdkjahlorem ipsum chuchuchu',
    },
    {
      id: 3,
      name: 'Benguet',
      image: 'images/Benguet/card_banner_benguet.jpg',
      intro: 'Lorem ipsum chuchuchu jskdhakjdhkahsdkjahlorem ipsum chuchuchu',
    },
    {
      id: 4,
      name: 'Ifugao',
      image: 'images/Ifugao/card_banner_ifugao.jpg',
      intro: 'Lorem ipsum chuchuchu jskdhakjdhkahsdkjahlorem ipsum chuchuchu',
    },
    {
      id: 5,
      name: 'Kalinga',
      image: 'images/Kalinga/card_banner_kalinga.jpg',
      intro: 'Lorem ipsum chuchuchu jskdhakjdhkahsdkjahlorem ipsum chuchuchu',
    },
    {
      id: 6,
      name: 'Mountain Province',
      image: 'images/MountainProvince/card_banner_mountainprovince.jpg',
      intro: 'Lorem ipsum chuchuchu jskdhakjdhkahsdkjahlorem ipsum chuchuchu',
    },
  ];

  return (
    <div className={styles.MainContainer}>
      {/* Region title/header */}
      <div className={styles.RegionContainer}>
        <RegionName regionName="Cordillera Administrative Region" />
      </div>

      {/* List of provinces rendered as cards */}
      <div className={styles.ProvinceContainer}>
        {provinces.map((province) => (
          <ProvinceContainer
            key={province.id}
            image={province.image}
            name={province.name}
            intro={province.intro}
          />
        ))}
      </div>
    </div>
  );
}

export default ProvincesAndCitiesPage;