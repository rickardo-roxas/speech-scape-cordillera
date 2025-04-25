# Client-Side Project Documentation

### `/public/images`
This folder contains image assets grouped by province.

- **Subfolders (e.g., Abra, Apayao, Benguet, BaguioCity, etc.)**:  
  Contain province-specific banners and images for its gallery.  
  Example contents: `default-banner.png`, `gallery-1.png`, etc.

- **`banner/`**:  
  This folder contains a **default banner** image that is used as a fallback in case a specific province or city banner fails to load.

- **`favicon/`**:  
  Stores the favicon files for the application.

---

## `/src`

### `/assets`
Shared design assets used globally across the app.

- `/fonts` – Imported fonts.  
- `/icons` – Icon components.  
- `/images` – General-use images like:  
  - `philippines.svg` – Philippine Map illustration.  
  - `province-city-backdrop.png`, `cordilleran-weave.png` – Background images.

### `/json`
Contains GeoJSON files for rendering maps.

- Follows the documented GeoJSON structure for **regions**, **provinces**, and **cities**:
  - `FeatureCollection` with `features`
  - Each feature includes:
    - `name`, `type` (Province or City), `color`
    - `geometry` (Polygon coordinates)

### `/styles`
Global stylesheet files.

- `Fonts.css` – Typography definitions  
- `Reset.css` – CSS reset rules  
- `Styles.css` – Base UI styling  
- `Variables.css` – CSS variables (colors, spacing, radius, etc.)

---

## `/components`
Main component logic for rendering maps, profiles, search, and UI elements.

### `/features`
Feature-specific components.

#### `/map`
- Displays the **main Philippine map**.  
- Renders **all regions** based on region-level GeoJSON.

#### `/ProvinceCities`
- Handles browsing or listing **provinces and cities**.

#### `/ProvinceCityProfile`
- Displays detailed information for a selected **province/city**.  
- Uses:
  - Images from `/public/images/{Province}`
  - Corresponding province/city
  - Metadata or descriptions

#### `/Search`
- Components related to searching provinces/cities.

### `/layout`
Reusable layout sections of the UI.

- `/Cards`, `/Footer`, `/Header`, `/TextContainer`  
- `Wrapper.jsx` – Page/container wrapper layout

### `/ui`
Reusable design components.

- `/Badge` – UI badge element  
- `/Button` – Reusable button components:
  - `Button.jsx`, `LinkButton.jsx`
  - Scoped styles via CSS modules  
- `/Carousel`, `/ErrorBoundary`, `Image.jsx`, `PHMapIcon.jsx`

---

## `/configs`
App-level configuration files or constants.

## `/hooks`
React hooks used across the app.

## `/pages`
Page-level components.

- `App.jsx`, `Main.jsx` – Entry and root-level components

---

## Root-Level Files

- `Dockerfile.dev`, `Dockerfile.prod` – Docker configurations for development and production.  
- `index.html` – Main HTML entry point.  
- `vite.config.js` – Vite bundler configuration.  
- `eslint.config.js` – Linting configuration.  
- `package.json`, `package-lock.json` – Project dependencies and scripts.