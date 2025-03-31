import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/", (req, res) => {
    res.send("Connected to Server.");
});

// app.use('/api/map', require('./routes/Map.routes'));
// app.use('/api/province', require('./routes/Province.routes'));
// app.use('/api/search', require('./routes/Search.routes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;