// Libraries and dependencies
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Components and styles
import styles from './PhilippineMap.module.css';

// Fix for default icon not displaying
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
    iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
    shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
});

const position = [13.41, 122.56]; // Philippine coordinates

function PhilippineMap({ center=position, zoom=6, className="" }) {
    return (
        <MapContainer
            center={center} 
            zoom={zoom}
            scrollWheelZoom={true}
            className={styles.mapContainer}
        >
        <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        </MapContainer>
    );
}

export default PhilippineMap;
