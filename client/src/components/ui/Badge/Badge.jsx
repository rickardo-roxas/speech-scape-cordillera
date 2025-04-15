import React from 'react';
import { Badge as BootstrapBadge } from 'react-bootstrap';

import styles from './Badge.module.css';

/**
 * Reusable Badge component that renders a badge.
 * @param {object} param0 - Component props
 * @param {string} param0.label - Badge label
 * @param {string} param0.className - Additional CSS classes
 * @returns {JSX.Element} - Rendered badge component
 */
function Badge({ label = "Badge", className = "" }) {
    return (
        <BootstrapBadge
            pill
            className={`${styles.badge} ${className}`}
        >
            {label}
        </BootstrapBadge>
    );
}

export default Badge;