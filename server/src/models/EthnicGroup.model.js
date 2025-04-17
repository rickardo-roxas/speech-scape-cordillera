/**
 * Class representing an ethnic group.
 */
class EthnicGroup {
    /**
     * Creates a new EthnicGroup object.
     * @param {String} ethnic_group_name - Name of the ethnicity
     * @param {float} percentage - Percentage of population
     */
    constructor(ethnic_group_name, percentage) {
        this.ethnic_group_name = ethnic_group_name;
        this.percentage = percentage;
    }
}

export default {
    EthnicGroup
}