import React from 'react';

// Components and Styles
import Card from '../../layout/Cards/Card';
import SectionTitle from './SectionTitle';
import BarangayList from './BarangayList';
import styles from './BarangayCard.module.css';

/**
 * BarangayCard component displays a card with a list of barangays.
 *
 * @param {Object} props - Component props
 * @param {string} [props.title="Barangays"] - Title for the section
 * @param {Array} props.barangays - List of barangay objects with `name`
 * @returns {JSX.Element} - Rendered BarangayCard
 */
function BarangayCard({ title = "Barangays", barangays = [] }) {
  return (
    <div>
      <Card className={styles.barangayCard}>
        <SectionTitle title={title} />
        <BarangayList barangays={barangays} />
      </Card>
    </div>
  );
}

export default BarangayCard;
