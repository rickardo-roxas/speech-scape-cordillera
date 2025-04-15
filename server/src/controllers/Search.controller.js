import { searchProvincesByName as searchProvincesFromModel } from '../models/Province.model.js';
/**
 * Controller: Search provinces by name
 * Route: GET /api/search/provinces?keyword=abra
 */
export async function searchProvincesByName(req, res, next) {
    try {
        const keyword = req.query.keyword;

        if (!keyword) {
            return res.status(400).json({ error: "Keyword query param is required" });
        }

        const results = await searchProvincesFromModel(keyword);

        return res.status(200).json(results);
    } catch (err) {
        console.error("Search controller error:", err);
        next(err);
    }
}
