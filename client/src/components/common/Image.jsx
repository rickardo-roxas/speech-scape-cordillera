import React from 'react';

/**
 * Image component
 * @param {Object} props - The component props
 * @returns {JSX.Element} - Rendered image component
 */
function Image({ alt="", src="", className="" }) {
    return (
        <img 
            alt={alt}
            src={src}
            className={className}
            loading='lazy'
        />
    );
}

export default Image;