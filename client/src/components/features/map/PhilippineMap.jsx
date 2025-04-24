// Libraries and dependencies
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Components and styles
import AutoFitMap from '../map/AutoFitMap';
import styles from './PhilippineMap.module.css';

// Fix for default icon not displaying
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
    iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
    shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
});

/**
 * Function to style GeoJSON features.
 * @param {object} feature - GeoJSON feature
 * @returns {object} - Style object for the feature
 */
const geoStyle = (feature) => ({
    fillColor: feature.properties.color,
    weight: 2,
    opacity: 1,
    color: '#2f2f2f',
    fillOpacity: 0.2,
});

/**
 * Reusable PhilippineMap component that renders a map of the Philippines.
 * @param {object} param0 - Component props
 * @param {boolean} param0.scrollWheelZoom - Enable scroll wheel zoom
 * @param {boolean} param0.dragging - Enable dragging
 * @param {boolean} param0.zoomControl - Enable zoom control
 * @param {string} param0.className - Additional CSS classes
 * @param {function} param0.onEachFeature - Function to handle each feature
 * @returns {JSX.Element} - Rendered PhilippineMap component
 */
function PhilippineMap({ scrollWheelZoom=false, dragging=true, zoomControl=true, className="", onEachFeature, geojson="" }) {
    return (
        <MapContainer
            scrollWheelZoom={scrollWheelZoom}
            dragging={dragging}
            zoomControl={zoomControl}
            className={`${styles.mapContainer} ${className}`}
        >
            {geojson && (
                <AutoFitMap 
                    geojson={geojson}
                    style={geoStyle}
                    onEachFeature={onEachFeature}
                />
            )}
            <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
}

export default PhilippineMap;
