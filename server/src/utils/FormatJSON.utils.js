/**
 * Formats the JSON response for the API to be used in controllers.
 */

/**
 * Returns language data.
 * @param {object} language  - The language object.
 * @returns a JSON object containing the formatted language data.
 */
function formatLanguage(language) {
    return {
        name: language.l_name,
    };
}

/**
 * Formats municipality data.
 * @param {object} municipality - The municipality object.
 * @returns a JSON object containing the formatted municipality data.
 */
function formatMunicipality(municipality) {
    return {
        name: municipality.m_name,
        info: municipality.m_info,
    };
}

/**
 * Formats province data.
 * @param {object} province - The province object.
 * @returns a JSON object containing the formatted province data.
 */
function formatProvince(province) {
    return {
        id: province.id,
        name: province.p_name,
        info1: province.info_1,
        info2: province.info_2,
        info3: province.info_3,
    };
}

/**
 * Formats province ethnicities data.
 * @param {object} ethnicity - The ethnicity object.
 * @returns a JSON object containing the formatted province ethnicities data.
 */
function formatProvinceEthnicities(ethnicity) {
    return {
        ethnic_group: ethnicity.ethnic_group,
        percentage: percentage,
    };
}

/**
 * Formats province language data.
 * @param {object} language - The province language object.
 * @returns a JSON object containing the formatted province language data.
 */
function formatProvinceLanguage(language) {
    return {
        ...formatLanguage(language),
        percentage: language.percentage,
    };
}

/**
 * Formats province image data.
 * @param {object} image - The province image object.
 * @returns a JSON object containing the formatted province image data.
 */
function formatProvinceImage(image) {
    return {
        image: image.image_url,
    };
}

/**
 * Formats region data.
 * @param {object} region - The region object.
 * @returns a JSON object containing the formatted region data.
 */
function formatRegion(region) {
    return {
        id: region.id,
        name: region.r_name,
        info1: region.info_1,
        info2: region.info_2,
        info3: region.info_3,
        provinces: region.provinces.map((province) => province.province),
    };
}