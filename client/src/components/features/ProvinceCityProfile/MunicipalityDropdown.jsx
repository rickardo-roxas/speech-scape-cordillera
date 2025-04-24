// Libraries and dependencies
import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';

// Styles
import styles from './MunicipalityDropdown.module.css';

/**
 * MunicipalityDropdown component that displays a collapsible accordion for each municipality.
 * The description is truncated if it exceeds 60 characters and shown on expand.
 *
 * @param {object} props - Component props
 * @param {string} props.title - Title of the municipality
 * @param {string} [props.description=""] - Description of the municipality, shown in the accordion body
 * @returns {JSX.Element} - Rendered MunicipalityDropdown component with collapsible content
 */
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
