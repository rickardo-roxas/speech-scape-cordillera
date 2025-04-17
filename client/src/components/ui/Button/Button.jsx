import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import styles from './Button.module.css';

/**
 * Reusable Button component that renders a button.
 * @param {Object} param0 - Component props
 * @param {string} param0.label - Button label
 * @param {function} param0.onClick - Click event handler
 * @param {string} param0.className - Additional CSS classes
 * @returns {JSX.Element} - Rendered button component
 */
function Button({ label = "Button", onClick, className = "" }) {
  return (
    <BootstrapButton
      variant="success"
      className={`${styles['button']} ${className}`}
      onClick={onClick}
    >
        {label}
    </BootstrapButton>
  );
}

export default Button;