# SpeechScape Cordillera

## Description
SpeechScape Cordillera is an innovative language mapping application dedicated to documenting, preserving, and celebrating the rich linguistic diversity of the Cordillera Administrative Region (CAR) in the Philippines. Through this platform, users can explore the history, languages, and ethnic groups of each province and city of the mountainous region.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Data Collection Methodology](#data-collection-methodology)
- [Technology Stack](#technology-stack)
- [API Documentation](#api-documentation)
- [Roadmap](#roadmap)
- [Contact](#contact)

## Features
- Modern and user-friendly UI
- Interactive linguistic mapping of the Cordillera region
- Detailed information of each province and city
- Search function

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:

  - Node.js (v18+)
  - npm or Yarn
  - Docker
  - Git
  - MySQL
  - VS Code (optional, but recommended)
    
### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/rickardo-roxas/speechscape-cordillera.git
cd speechscape-cordillera
```

#### 2. Install Dependencies
```bash
cd client && npm install
cd ../server && npm install
```

#### 3. Setup
```bash
# Development build
docker compose -f docker-compose.dev.yml

# Production build
docker compose -f docker-compose.prod.yml up
```

### Usage

### Project Structure
speech-scape-cordillera/
│
├── client/              # React + Vite frontend
├── server/              # Node + Express backend
├── mysql-data/          # Docker volume for MySQL
├── speech_scape.sql     # Initial schema + seed data
├── docker-compose.dev.yml
├── docker-compose.prod.yml
└── README.md

### API Endpoints

#### Landing
Method | Endpoint | Description
GET | /api/ | Get the region of CAR

#### Province-City
Method | Endpoint | Description
GET | /api/province-city/ | Get all provinces and cities
GET | /api/province-city/city/:name | Get a city by name
GET | /api/province-city/province/:name | Get a province by name

#### Search
Method | Endpoint | Description
GET | /api/search/ | Search a province or city by name

## Data Collection Methodology
SpeechScape Cordillera employs a multi-faceted approach to linguistic data collection:
- Data sources from PhilAtlas and Philippines Statistics Authority (PSA)
- Geotagging language data to provinces and cities

## Technology Stack
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Frontend**: React.js, Vite, Leaflet.js
- **Containerization**: Docker

## Roadmap
- [ ] Deploy frontend to GitHub Pages
- [ ] Deploy frontend to GitHub Pages
- [ ] Launch mobile-friendly UI
- [ ] Add translation and dialect support
- [ ] Enable community submissions and contributions

## License
Apache-2.0

## Contact
**Developers**
- DE TORRES, John Rey
- JASMIN, Ramon Emmiel
- LACANILAO, Marvin Patrick
- RILLERA, Hans
- ROXAS, Johan Rickardo
- SICCUAN, Sebastian
- TANK, Rithik

## Acknowledgments
- PhilAtlas
- Philippine Statistics Authority