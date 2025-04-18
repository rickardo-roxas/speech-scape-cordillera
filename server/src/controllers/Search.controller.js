import ProvinceModel from '../models/Province.model.js';

const searchProvinceByName = async (req, res, next) => {
    try {
        const name = req.params.name;

        if (!name) {
            return res.status(400).json({ error: "Province name is required" });
        }

        const results = await ProvinceModel.searchProvinceByName(name);
        return res.status(200).json(results);
    } catch (err) {
        console.error("Search controller error:", err);
        next(err);
    }
};

export { searchProvinceByName };