import databaseUtils from '../utils/Database.utils.js';

class Province{
        constructor(name, information, municipalities, ethnicities, languages, images){
        this.name = name;
        this.information = information;
        this.municipalities = municipalities;
        this.ethnicities = ethnicities;
        this.languages = languages;
        this.images = images;
    }
}