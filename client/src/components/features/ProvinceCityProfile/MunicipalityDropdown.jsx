import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import styles from './MunicipalityDropdown.module.css';

function MunicipalityDropdown({ title, description = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  const previewText = description.length > 60 ? description.slice(0, 60) + '...' : description;

  return (
    <div className={styles.dropdownCard}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.headerContent}>
              <strong>{title}</strong>
              {!isOpen && (
                <p className={styles.preview}>{previewText}</p>
              )}
            </div>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            {description}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default MunicipalityDropdown;
