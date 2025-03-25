require("dotenv").config();

const express = require("express");
const cors = require("cors");

const landingRoutes = require('./routes/LandingRoutes');
const mapRoutes = require('./routes/MapRoutes');
const provinceRoutes = require('./routes/ProvinceRoutes');
const searchRoutes = require('./routes/SearchRoutes'); 

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

/* Routes */
app.use("/api/", landingRoutes);
app.use("/api/map", mapRoutes);
app.use("/api/province", provinceRoutes);
app.use("/api/search", searchRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});