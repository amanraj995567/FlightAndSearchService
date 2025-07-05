const { City } = require('../models/index');
const CrudRepository = require('./crud-repository');

const {op} = require('sequelize');

class CityRepository extends  CrudRepository {

    constructor(model){
        super(model);
    }   
}

module.exports = CityRepository
