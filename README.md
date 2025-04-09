# SpeechScape Cordillera

## Description
SpeechScape Cordillera is an innovative language mapping application focused on documenting and preserving the rich linguistic diversity of the Cordillera Administrative Region (CAR) in the Philippines. The project aims to create a comprehensive digital repository of languages, dialects, and linguistic variations unique to this mountainous region.

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
- Interactive linguistic mapping of the Cordillera region
- Comprehensive language and dialect documentation
- Search and filtering capabilities

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:

- **Programming Languages and Frameworks**
  - Node.js (v18+)
  - npm or Yarn
  - Docker
  - Git

- **Database**
  - MySQL (8.0+)
  - MySQL Workbench (optional)

- **Development Tools**
  - Code Editor (VSCode recommended)
  - Docker
    
### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/your-username/speechscape-cordillera.git
cd speechscape-cordillera
```

#### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

#### 3. Database Setup
```bash
# Start MySQL Docker container
docker-compose up -d database

# Run database migrations
npm run migrate
# or
yarn migrate
```

### Configuration
Create a `.env` file in the project root with the following configurations:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=speechscape_user
DB_PASSWORD=your_secure_password
DB_NAME=speechscape_cordillera

# Application Settings
PORT=3000
NODE_ENV=development

## Usage

### Running the Application
```bash
# Development mode
npm run dev
# or
yarn dev

# Production build
npm run build
npm start
# or
yarn build
yarn start
```

### API Endpoints
- To be defined

## Data Collection Methodology
SpeechScape Cordillera employs a multi-faceted approach to linguistic data collection:
- To be defined.

## Technology Stack
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Frontend**: React.js
- **Mapping**: Leaflet.js
- **Containerization**: Docker

## Roadmap
- [ ] Expand language coverage
- [ ] Add community contribution
- [ ] Add translation features
- [ ] Develop mobile application

## License
To define

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
- Cordillera Indigenous Language Communities
- Local Academic Institutions
