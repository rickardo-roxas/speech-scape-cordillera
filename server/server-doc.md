# Server-Side Documentation

## `/src`

### `/configs`:

- **Cors.config.js**
    Configures the CORS options to connect and communicate with the client.

- **Database.config.js**
    Configures the connection with the MySQL database.

- **Index.config.js**
    Configures the creation of environment variables.

### `/controllers`

- **Landing.controller.js**
    Handles the business logic for the landing page.

- **Map.controller.js** 
    Handles the business logic for the map page.

- **ProvinceCity.controller.js**
    Handles the business logic for the province-city page and subpages of each city and province

- **Search.controller.js**
    Handles the business logic for the search function.

### `/middlewares`

- **ErrorHandler.middleware.js**
    Handles all server-side errors.

- **Logger.middleware.js**
    Prints requests and responses for each endpoint.

### `/models`

Note: As the project grows, business-logic for querying the database may be needed to be transferred to a new directory of '/services'

- **Barangay.model.js**
    Specifies a Barangay object from the database.

- **City.model.js**
    Specifies a City object and handles queries to the database.

- **EthnicGroups.model.js**
    Specifies an Ethnic Group object from the database.
    
- **Language.model.js**
    Specifies a Language object from the database.

- **Municipalities.model.js**
    Specifies a Municipality object and handles queries to the database.

- **Province.model.js**
    Specifies a Province object and handles queries to the database.

- **Region.model.js**
    Specifies a Region object and handles queries to the database.

### `/routes`

- **Landing.routes.js**
    Specifies the endpoints for the landing page.

- **Map.routes.js**
    Specifies the endpoints for the map page.

- **ProvinceCity.model.js**
    Specifies the endpoints for the province-city page.

- **Search.model.js**
    Specifies the endpoints for the search function.

### `/utils`

- **Database.utils.js**
    Provides utility functions for invoking the queries and updates in the database.

- **ResponseHandler.utils.js**
    Formats the error or success JSON responses to be sent to the client. This is used for each controller. 
## `index.js` 
    Configures the root-level endpoints, environment variables, and setup of dependencies. This also servers as the entry-point of the server.

## `Dockerfile.dev`
    Specifies the creation of the Docker container for the development environment.

## `Dockerfile.prod` 
    Specifies the creation of the Docker container for the production environment.

## `eslint.config.js` 
    Configures the linter for code quality of the server.

## `jest.config.js` 
    Configures the testing environment of the server.

## `package.json` 
    Holds the dependencies of the server-side environment.
