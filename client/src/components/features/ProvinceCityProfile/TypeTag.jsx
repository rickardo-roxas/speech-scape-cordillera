// Libraries and dependencies
import React from 'react';

// Styles
import styles from './TypeTag.module.css';

/**
 * TypeTag component that displays a tag with a given type text.
 *
 * @param {object} props - Component props
 * @param {string} props.type - Type text to display in the tag
 * @returns {JSX.Element} - Rendered TypeTag component
 */
const TypeTag = ({ type }) => {
  return (
    <div className={styles.typeTag}>
      {type}
    </div>
  );
};

export default TypeTag;