import React, { useEffect } from 'react';
import { GeoJSON, useMap } from 'react-leaflet';
import L from 'leaflet';

/**
 * AutoFitMap component to display GeoJSON data on a Leaflet map.
 * @param {object} param0 - Component props
 * @param {object} param0.geojson - GeoJSON data to display on the map
 * @param {function} param0.style - Function to style the GeoJSON features
 * @param {function} param0.onEachFeature - Function to handle each feature
 * @returns {JSX.Element} - Rendered AutoFitMap component
 */
function AutoFitMap({ geojson, style, onEachFeature }) {
    const map = useMap();

    // Effect to fit the map bounds to the GeoJSON data
    useEffect(() => {
        if (geojson) {
            const bounds = L.geoJSON(geojson).getBounds();
            map.fitBounds(bounds);
        }
    }, [geojson, map]);

    return (
        <GeoJSON
            data={geojson}
            style={style}
            onEachFeature={onEachFeature}
        />
    );
}

export default AutoFitMap;