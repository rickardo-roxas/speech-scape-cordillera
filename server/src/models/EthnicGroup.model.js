/**
 * Class representing an ethnic group.
 */
class EthnicGroup {
    /**
     * Creates a new EthnicGroup object.
     * @param {String} eg_name - Name of the ethnicity
     * @param {float} percentage - Percentage of population
     */
    constructor(eg_name, percentage) {
        this.eg_name = eg_name;
        this.percentage = percentage;
    }
}

export default {
    EthnicGroup
}