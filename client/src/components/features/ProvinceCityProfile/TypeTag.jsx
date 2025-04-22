import React from 'react';
import styles from './TypeTag.module.css';

const TypeTag = ({ type }) => {
  return (
    <div className={styles.typeTag}>
      {type}
    </div>
  );
};

export default TypeTag;