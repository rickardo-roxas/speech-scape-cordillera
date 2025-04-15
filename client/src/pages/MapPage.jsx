// Libraries and dependencies
import React from 'react';
// import useFetch from '../hooks/UseFetch.hook';

// Components
import Card from '../components/layout/Cards/Card';
import TextContainer from '../components/layout/TextContainer/TextContainer';
import Badge from '../components/ui/Badge/Badge';
import PhilippineMap from '../components/features/map/PhilippineMap';

import styles from './MapPage.module.css';

/**
 * Displays the map and province profile.
 * @returns {JSX.Element} 
 */
function MapPage() {
    return (
        <div className={styles.div}>
            <Card
                header="Province"
                className={styles.profile}
            >
                <TextContainer 
                    title="Heading"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <Badge>
                        Province
                    </Badge>
                </TextContainer>
                <TextContainer 
                    title="Heading"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </TextContainer>
            </Card>

            <Card
                header="Cordillera Administrative Region"
                className={styles.map}
            >
                <PhilippineMap />
            </Card> 
        </div>
    );
}

export default MapPage;