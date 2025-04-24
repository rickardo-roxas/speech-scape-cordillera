import React from 'react';
import Card from '../../layout/Cards/Card';
import styles from './MunicipalityCard.module.css';
import SectionTitle from './SectionTitle';

function MunicipalityCard({title}) {
  return (
    <div>
        <Card className= {styles.municipalityCard}>
            <SectionTitle title={title} />
        </Card>
    </div>
  );
}

export default MunicipalityCard;