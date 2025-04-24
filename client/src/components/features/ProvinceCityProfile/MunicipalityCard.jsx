// Libraries and dependencies
import React from 'react';

// Components and styles
import Card from '../../layout/Cards/Card';
import SectionTitle from './SectionTitle';
import MunicipalityDropdown from './MunicipalityDropdown';
import styles from './MunicipalityCard.module.css';

/**
 * MunicipalityCard component that displays a list of municipalities
 * each with a dropdown containing more information.
 *
 * @param {object} props - Component props
 * @param {string} [props.title="Municipalities"] - Title for the card section
 * @param {Array} props.municipalities - List of municipality data
 * @param {string} props.municipalities[].municipality_name - Name of the municipality
 * @param {string} props.municipalities[].info - Description or info about the municipality
 * @returns {JSX.Element} - Rendered MunicipalityCard component with list of dropdowns
 */
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