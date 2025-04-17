// Libraries
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Middlewares
import corsOptions from "./configs/Cors.config.js";
import errorHandler from "./middlewares/ErrorHandler.middleware.js";
import logger from "./middlewares/Logger.middleware.js";

// Environment Variables
import config from './configs/Index.config.js';

// Routes
import searchRoutes from "./routes/Search.routes.js";
import mapRoutes from "./routes/Map.routes.js";
import provinceRoutes from "./routes/Province.routes.js";

// Environment Variables
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public",)));
app.use(logger);

// Routes
app.get("/api/", (req, res) => { 
    res.send("Connected to Server.");
});
app.use('/api/map', mapRoutes);
app.use('/api/province', provinceRoutes);
app.use('/api/search', searchRoutes);

// Error Handling
app.use((req, res, next) => {
    res.status(404).json({ error: "Not Found" });
});
app.use(errorHandler);

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT} in ${config.NODE_ENV} mode`);
});

export default app;