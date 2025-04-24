import React from 'react';
import Card from '../../layout/Cards/Card';
import styles from './MunicipalityCard.module.css';
import SectionTitle from './SectionTitle';
import MunicipalityDropdown from './MunicipalityDropdown';

function MunicipalityCard({ title = "Municipalities", municipalities = [] }) {
  return (
    <div>
      <Card className={styles.municipalityCard}>
        <SectionTitle title={title} />
        {municipalities.map((municipality, index) => (
          <MunicipalityDropdown
            key={index}
            title={municipality.municipality_name}
            description={municipality.info}
          />
        ))}
      </Card>
    </div>
  );
}

export default MunicipalityCard;
