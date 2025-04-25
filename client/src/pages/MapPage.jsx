import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

import useFetch from '../hooks/UseFetch.hook';
import ProgressBar from 'react-bootstrap/ProgressBar';

import Card from '../components/layout/Cards/Card';
import LinkButton from '../components/ui/Button/LinkButton';
import TextContainer from '../components/layout/TextContainer/TextContainer';
import PhilippineMap from '../components/features/map/PhilippineMap';

import cordilleraGeoJSON from '../assets/json/cordillera.json';
import styles from './MapPage.module.css';

/**
 * Displays the map and province profile.
 * @returns {JSX.Element} 
 */
function MapPage() {
    // Location features from map
    const [selectedLocationName, setSelectedLocationName] = useState('');
    const [selectedLocationType, setSelectedLocationType] = useState('');

    // Location data
    const [locationDetails, setLocationDetails] = useState(null);

    const { data, refetch } = useFetch(`/map/${selectedLocationType.toLowerCase()}/${encodeURIComponent(selectedLocationName)}`, {
        method: "GET",
    }, false);

    useEffect(() => {
        if (data && data.success && data.data) {
            const details = data.data;
            setLocationDetails({
                name: details.name,
                info_1: details.info_1,
                info_2: details.info_2,
                info_3: details.info_3,
                sublocations: selectedLocationType === "Province" ? details.municipalities : details.barangays,
                ethnicGroups: details.ethnic_groups,
                languages: details.languages,
                images: details.images,
            });
        }
    }, [data, selectedLocationType]);

    useEffect(() => {
        if (selectedLocationName && selectedLocationType) {
            refetch();
        }
    }, [selectedLocationName, selectedLocationType, refetch]);    

    /**
     * Function to handle events for each GeoJSON feature upon user click.
     * @param {object} feature - GeoJSON feature
     * @param {L.layer} layer - Leaflet layer 
     */
    const onEachFeature = (feature, layer) => {
        layer.bindPopup(feature.properties.name);
        layer.on('click', () => {
            setSelectedLocationName(feature.properties.name);
            setSelectedLocationType(feature.properties.type);
        });
    };

    return (
        <div className={styles.container}>
            <Card
                header={locationDetails && locationDetails.name ? locationDetails.name : 'Information'}
                className={styles.profile}
                headerClassName={styles.stickyHeader}
            >
                
                <TextContainer 
                    className={styles.infoContainer}
                    title={locationDetails ? "Overview" : ""}
                >
                    {locationDetails ? (
                        <>
                        <p>{locationDetails.info_1} </p>
                        <p>{locationDetails.info_2} </p>
                        <p>{locationDetails.info_3} </p>

                        </>
                    ) : (
                        <div className={styles.noSelectionPrompt}>
                            <p>Click a province or city to load data</p>
                        </div>
                    )}
                </TextContainer>

                {locationDetails && locationDetails.ethnicGroups && (
                    <TextContainer title="Ethnic Groups">
                        <Doughnut
                        data={{
                            labels: locationDetails.ethnicGroups.map(g => g.ethnic_group_name),
                            datasets: [
                            {
                                data: locationDetails.ethnicGroups.map(g => parseFloat(g.percentage)),
                                backgroundColor: [
                                    '#004D00',
                                    '#00C853',
                                    '#1B5E20',
                                    '#66BB6A',
                                    '#009688',
                                    '#A5D6A7',
                                    '#2E7D32',
                                    '#8BC34A'
                                  ],
                                hoverOffset: 4,
                            }
                            ]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'right', // <-- this moves it to the right
                                    align: 'center',   // centers it vertically
                                    labels: {
                                    boxWidth: 20,    // size of color box
                                    padding: 10      // spacing between items
                                    }
                                }
                            }
                        }}
                        />
                    </TextContainer>
                    )}
            
                {locationDetails && locationDetails.languages && (
                    <TextContainer title="Languages">
                        {locationDetails.languages.map((g, index) => (
                            <div key={index}>
                                <div className={styles.progressWrapper}>
                                    <ProgressBar className={styles.customProgress}>
                                        <ProgressBar
                                            className={styles.customProgressLanguage}
                                            now={Number(g.percentage)}
                                            variant="success"
                                            key={1}
                                        />
                                    </ProgressBar>
                                    <span className={styles.languageLabel}>{g.name}</span>
                                    <span className={styles.percentageLabel}>{g.percentage}%</span>
                                </div>
                            </div>
                        ))}
                    </TextContainer>
                )}

                {locationDetails && locationDetails.languages && (
                <TextContainer className = {styles.learnMore}>
                    <LinkButton
                        label = "Learn More" 
                        to = {`/province-city/${selectedLocationType.toLowerCase()}/${selectedLocationName}`} 
                        className = "">
                    </LinkButton>
                </TextContainer>
                )}

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