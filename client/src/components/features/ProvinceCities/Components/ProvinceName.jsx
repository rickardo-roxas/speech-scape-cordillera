import React from 'react';

import styles from './Province.module.css';
import TypeTag from '../../../ui/Badge/Badge';

function ProvinceName({ name = '' , type='' }) {
    return (
      <div className={styles.container}> 
        <h3 className={styles.header}>{name}</h3>
        <TypeTag label={type} />
      </div>
    );
  }

  export default ProvinceName;