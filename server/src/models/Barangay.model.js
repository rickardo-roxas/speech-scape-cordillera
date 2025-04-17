import DatabaseUtils from "../utils/Database.utils.js";

/**
 * Class representing a barangay.
 */
class Barangay {
    constructor(name) {
        this.name = name;
    }
}

/**
 * Returns all barangays from the database.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getAllBarangays() {
    try {
        const barangays = await DatabaseUtils.getAll('city_barangays');
        return barangays.map((barangay) => new Barangay(
            barangay.barangay_name
        ));
    } catch(err) {
        console.error("Failed to fetch all cities");
        throw err;
    }
}

export default {
    Barangay,
    getAllBarangays
};