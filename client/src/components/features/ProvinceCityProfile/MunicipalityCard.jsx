// components/MunicipalityCard.js
import React from 'react';
import Card from '../../layout/Cards/Card';
import styles from './MunicipalityCard.module.css';
import SectionTitle from './SectionTitle';
import MunicipalityDropdown from './MunicipalityDropdown';

function MunicipalityCard({ title = "Municipalities" }) {
  const municipalityData = [
    { name: 'Sablan', description: 'Sablan is a peaceful municipality known for its scenic hills and agriculture.' },
    { name: 'Mankayan', description: 'Mankayan is rich in mineral resources and cultural heritage.' },
    { name: 'Atok', description: 'Atok features breathtaking mountain views and is a key vegetable producer.' },
  ];

  return (
    <div>
      <Card className={styles.municipalityCard}>
        <SectionTitle title={title} />
        {municipalityData.map((municipality, index) => (
          <MunicipalityDropdown
            key={index}
            title={municipality.name}
            description={municipality.description}
          />
        ))}
      </Card>
    </div>
  );
}

export default MunicipalityCard;