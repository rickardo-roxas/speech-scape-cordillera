# Region GeoJSON Documentation
A Philippine region contains its provinces and their respective geographical data. 

# Provinces and Cities GeoJSON Documentation

Each province has its respective GeoJSON that includes:
- Province/City name
- Type (Province or City)
- Coordinates
- Color

## GeoJSON structure overview
- **type**: Defines the type of the GeoJSON file (FeatureCollection).
- **features**: An array containing the actual geographic data for each province or city.
  - **type**: Defines the feature type (Feature).
    - **properties**: Contains metadata for each feature, such as name, description, and color for styling.
    - **name**: The name of the province or city.
    - **type**: Defines the type: Province or City.
    - **color**: Defines the specific color of the province/city.
  - **geometry**: Contains the geographic data (coordinates for the provinces).
    - **type**: Defines the feature type (Polygon).
    - **coordinates**: An array containing the coordinates of the province/city.


## Usage
These files will be used to render the map for the PhilippineMap and ProvinceCityMap components.