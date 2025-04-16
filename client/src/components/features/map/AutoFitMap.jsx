import React, { useEffect } from 'react';
import { GeoJSON, useMap } from 'react-leaflet';
import L from 'leaflet';

function AutoFitMap({ geojson, style, onEachFeature }) {
    const map = useMap();

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