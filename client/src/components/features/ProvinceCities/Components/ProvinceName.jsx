import React from 'react';

import styles from './Province.module.css';

function ProvinceName({ name = "Province Name" }) {
    return (
      <div className={styles.container}> 
        <h3 className={styles.header}>{name}</h3>
      </div>
    );
  }

  export default ProvinceName;