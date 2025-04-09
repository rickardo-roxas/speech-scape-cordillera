// Libraries
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Middlewares
import corsOptions from "./configs/Cors.config.js";
import errorHandler from "./middlewares/ErrorHandler.middleware.js";
import logger from "./middlewares/Logger.middleware.js";

// Routes
import searchRoutes from "./routes/Search.routes.js";
import mapRoutes from "./routes/Map.routes.js";
import provinceRoutes from "./routes/Province.routes.js";

dotenv.config();

// Environment Variables
const PORT = process.env.PORT;
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

// For testing purposes
app.get("/", (req, res, next) => {
    res.send("Connected to Server.");
    next();
});

app.get("/api/", (req, res, next) => { 
    res.send("Connected to Server.");
    next();
});
app.use('/api/map', mapRoutes);
app.use('/api/province', provinceRoutes);
app.use('/api/search', searchRoutes);

// Error Handling
app.use((req, res, next) => {
    res.status(404).json({ error: "Not Found" });
});
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;