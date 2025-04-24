import React from 'react';

// Styles
import styles from './BarangayList.module.css';

/**
 * BarangayList component displays a list of barangay names.
 *
 * @param {Object} props - Component props
 * @param {Array} props.barangays - List of barangays, each with a `name`
 * @returns {JSX.Element} - Rendered BarangayList
 */
function BarangayList({ barangays = [] }) {
  return (
    <div className={styles.list}>
      {barangays.map((barangay, index) => (
        <div key={index} className={styles.barangayItem}>
          {barangay.name}
        </div>
      ))}
    </div>
  );
}

export default BarangayList;
