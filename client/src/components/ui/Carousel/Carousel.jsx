import React from 'react';
import { Carousel as BootstrapCarousel }from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import styles from './Carousel.module.css';

/**
 * Reusable carousel component that can display images, texts, or other React components.
 * @param {Object} param0 - Component props
 * @param {Number} param0.interval - Duration of one item to another.
 * @param {import('react').ReactNode} - Children components.
 * @param {string} param0.className - Additional className for styling.
 * @returns {JSX.Element} - Rendered carousel component.
 */
function Carousel({ interval = 4000, children, className='' }) {
    const items = React.Children.toArray(children);

    return (
        <BootstrapCarousel
            interval={interval} 
            className={`${styles.carousel} ${className}`}
            indicators={true}
            prevIcon={<FaChevronLeft size={30} color="black" />}
            nextIcon={<FaChevronRight size={30} color="black" />}
        >
            {items.map((item, index) => (
                <BootstrapCarousel.Item
                    key={index} 
                    interval={interval}
                >
                    <div className={styles.content}>
                        {item}
                    </div>
                </BootstrapCarousel.Item>
            ))}
        </BootstrapCarousel>
    );
}

export default Carousel;