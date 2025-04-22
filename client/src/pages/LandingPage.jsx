import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/UseFetch.hook';

import Image from '../components/ui/Image';
import TextContainer from '../components/layout/TextContainer/TextContainer';
import LinkButton from '../components/ui/Button/LinkButton';
import Carousel from '../components/ui/Carousel/Carousel';
import PHMapIcon from '../components/ui/PHMapIcon';

import cordilleranWeave from '../assets/images/cordilleran-weave.png';
import styles from './LandingPage.module.css';

/**
 * Displays the landing page of SpeechScape.
 * @returns {JSX.Element} - The rendered landing page.
 */
function LandingPage() {
    const [cordilleraData, setCordilleraData] = useState(null);

    const { data, refetch } = useFetch('/' , { method: "GET" }, true);

    useEffect(() => {
        if (data && data.success && data.data) {
            const details = data.data;
            setCordilleraData({
                name: details.region_name,
                info_1: details.info_1,
                info_2: details.info_2,
                info_3: details.info_3,
                provinces: details.provinces,
                cities: details.cities
            });
        }
    }, [data, setCordilleraData]);

    useEffect(() => {
        if (!cordilleraData) {
            refetch();
        }
    }, [cordilleraData, refetch]);

    return (
        <>
            {/* Static Components */}
            <div className={styles.hero}>
                <TextContainer
                    className={styles.headline}
                    contentClassName={styles.headlineText}
                >
                    <h1>SpeechScape</h1>
                    <h2>A reimagined atlas of the Philippines.</h2>
                    <p>Discover the languages, cultures, and stories that shape each region, starting with the Cordillera Administrative Region.</p>
                    <ul>
                        <li>Interactive regional maps</li>
                        <li>Detailed insights into the history of each region and city</li>
                        <li>Accurate distribution of languages and ethnic groups</li>
                        <li>Galleries of famous landmarks</li>
                    </ul>
                    <div className={styles.ctaContainer}>
                        <LinkButton
                            label="Learn More"
                            to='#cordillera'
                            className={styles.cta}
                        />
                    </div> 
                </TextContainer>

                <PHMapIcon className={styles.heroImage} />

            </div>

            {/* Dynamic Regional Components */}
            <div className={styles.regions}>
                <span>
                    <Image src={cordilleranWeave} />
                </span>
                {cordilleraData && (
                    <div className={styles.cordillera} id='cordillera'>
                        
                        <TextContainer contentClassName={styles.regionsContainer}>
                            <div className={styles.regionsOverview}>
                                {/* Overview */}
                                <h2>{cordilleraData.name}</h2>

                                <p>{cordilleraData.info_1}</p>
                                <p>{cordilleraData.info_2}</p>
                                <p>{cordilleraData.info_3}</p>

                                {/* CTA Links */}
                                <div className={styles.linkButtons}>
                                    <LinkButton 
                                        label="View Provinces and Cities"
                                        to='/province-city/'
                                        className='locationsButton'
                                    />

                                    <LinkButton 
                                        label="Explore Map"
                                        to='/map'
                                        className={styles.mapButton}
                                    />
                                </div>
                            </div>

                            {/* Images Carousel */}
                            <Carousel>
                                
                                    {[
                                        ...(cordilleraData.provinces?.flatMap(p => p.images.map(img => `/images${img}`)) || []),
                                        ...(cordilleraData.cities?.flatMap(c => Object.values(c.images).map(img => `/images${img}`)) || [])
                                    ].map((imgSrc, index) => (
                                        <Image key={index} src={imgSrc} />
                                    ))}

                            </Carousel>
                        </TextContainer>
                    </div>
                )}
            </div>
        </>
    );
}

export default LandingPage;