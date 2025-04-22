import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

import styles from './Card.module.css';

/**
 * Reusable Card component that renders a card with an optional header.
 * @param {object} param0 - Component props
 * @param {string} param0.header - Optional card header
 * @param {string} param0.children - Card body content. Can contain multiple elements.
 * @returns {JSX.Element} - Rendered card component
 */
function Card({ header, children, className = '', headerClassName='' }) {
  return (
    <BootstrapCard className={`${styles.card} ${className}`}>
      {header && (
        <BootstrapCard.Header className={`${styles.header} ${headerClassName}`}>
          <h2>
            {header}
          </h2>
        </BootstrapCard.Header>
      )}
      <BootstrapCard.Body className={styles.body}>
        {children}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}

export default Card;