import React, { useState } from 'react';
// import useFetch from '../hooks/UseFetch.hook';

import Card from '../components/layout/Cards/Card';
import TextContainer from '../components/layout/TextContainer/TextContainer';
import Badge from '../components/ui/Badge/Badge';
import PhilippineMap from '../components/features/map/PhilippineMap';

import cordilleraGeoJSON from '../assets/json/cordillera.json';
import styles from './MapPage.module.css';

/**
 * Displays the map and province profile.
 * @returns {JSX.Element} 
 */
function MapPage() {
    //const [selectedProvince, setSelectedProvince] = useState(null);
    //const [provinceData, setProvinceData] = useState(null);

    /**
     * Function to handle events for each GeoJSON feature upon user click.
     * @param {object} feature - GeoJSON feature
     * @param {L.layer} layer - Leaflet layer 
     */
    const onEachFeature = (feature, layer) => {
        layer.bindPopup(feature.properties.name);
        layer.on('click', () => {
            setSelectedProvince(feature.properties.name);
        });
    }

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
                <PhilippineMap
                    scrollWheelZoom={true}
                    dragging={true}
                    zoomControl={true}
                    onEachFeature={onEachFeature}
                    geojson={cordilleraGeoJSON}
                />
            </Card> 
        </div>
    );
}

export default MapPage;