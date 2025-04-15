// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Local
import Image from '../../ui/Image';
import logo from '../../../assets/icons/logo_solid.png';

import styles from './Logo.module.css';

function Logo() {
    return (
        <Link to="/" className={styles.logo}>
            <Image 
                alt="SpeechScape logo"
                src={logo}
                width={ 55 }
                height={ 55 }
            />
            <h1 className={styles.h1}>
                SpeechScape
            </h1>
        </Link>
    );
}

export default Logo;