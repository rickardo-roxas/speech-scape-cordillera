import React from 'react';
import logo from '../../../public/icons/logo_solid.png';

/**
 * Reusable Logo component that renders the logo image.
 * @returns {JSX.Element} - Rendered logo component
 */
function Logo() {
    return (
        <img 
            alt="Logo"
            src={logo}
            className="logo"
            loading='lazy'
        />
    );
}

export default Logo;