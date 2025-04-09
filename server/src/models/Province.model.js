import databaseUtils from '../utils/Database.utils.js';

class Province{
        constructor(name, info_1, info_2, info_3, municipalities, ethnicities, languages, images){
        this.name = name;
        this.info_1 = info_1;
        this.info_2 = info_2;
        this.info_3 = info_3
        this.municipalities = municipalities;
        this.ethnicities = ethnicities;
        this.languages = languages;
        this.images = images;
    }
}

/**
 * Returns all images of a province
 */
async function getProvinceImagesByID(id){
    try{
        const query = "SELECT img_url FROM province_images WHERE province_id = ?";
        const images = await databaseUtils.performQuery(query, [id]);
        
        if(images.length === 0){
            console.log("No images found for province ID " + id);
            return [];
        }

        return images.map(image => image.img_url);
        
    }catch(err){
        console.error("Failed to fetch province images");
        throw err;
    }
}

/**
 * Returns all languages of a province
 */
async function getProvinceLanguagesByID(id){
    try{
        const query = "SELECT "
    }catch(err){
        console.error("Cannot fetch languages of province ID " + id);
        throw err;
    }
}

/**
 * Returns all ethnicities of a province as a dictionary
 */
async function getProvinceEthnicitiesByID(id){
    try{
        const query = "SELECT ethnic_group, percentage FROM province_ethnicities WHERE province_id = ?";
        const ethnicities = await databaseUtils.performQuery(query, [id]);

        if(ethnicities === 0){
            console.log("No ethnicities found");
            return [];
        }

        return ethnicities.map(ethnicity => ({
            ethnic_group: ethnicity.ethnic_group,
            percentage: ethnicity.percentage
        }));

    }catch(err){
        console.error("Failed to fetch ethnicities of province id " + id);
        throw err;
    }
}

/**
 * Returns all municipalities of a province
 */
async function getProvinceMunicipalitiesByID(id){
    try{
    /**
     * Will use Municipality model function
     */
    }catch(err){
        console.error("Failed to fetch municipalities of province id " + id);
        throw err;
    }
    
}