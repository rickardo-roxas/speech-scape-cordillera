import React from 'react';

import styles from './Province.module.css';
import TypeTag from '../../../ui/Badge/Badge';

function ProvinceName({ name = "Province Name" }) {
    return (
      <div className={styles.container}> 
        <h3 className={styles.header}>{name}</h3>
      <TypeTag label="Province" />
      </div>
    );
  }

  export default ProvinceName;