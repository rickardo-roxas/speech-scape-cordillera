import React from 'react';

import styles from './Province.module.css';
import TypeTag from '../../../ui/Badge/Badge';

/**
 * Displays the name of a province or city along with a type tag (e.g., "Province" or "City").
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.name=""] - The name of the province or city to display
 * @param {string} [props.type=""] - The type/category label (used in the badge), such as "Province" or "City"
 * @returns {JSX.Element} A styled name section with a header and badge
 */

function ProvinceName({ name = '' , type='' }) {
    return (
      <div className={styles.container}> 
        <h3 className={styles.header}>{name}</h3>
        <TypeTag label={type} />
      </div>
    );
  }

  export default ProvinceName;