const { City } = require('../models/index');

const {op} = require('sequelize');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.error("Something went wrong in repository layer: create request", error);
            throw error; // ✅ FIXED HERE
        }
    }

    async deleteCity({ Cityid }) {
        try {
            await City.destroy({
                where: {
                    id: Cityid
                }
            });
            return true;
        } catch (error) {
            console.error("Something went wrong in repository layer: delete request", error);
            throw error;
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        } catch (error) {
            console.error("Something went wrong in repository layer: update request", error);
            throw error;
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.error("Something went wrong in repository layer: get request", error);
            throw error;
        }
    }

    async getAllCities(filter) {
        try {

            if(filter.name){
            const cities = await City.findAll({
                where: {
                    name: {
                        [op.startsWith]: filter.name
                    }
                }
            });
            return cities;
        }

        const cities = await City.findAll();
        return cities;
        
    

        } catch (error) {
            console.error("Something went wrong in repository layer: get all request", error);
            throw error;
        }
    }
}

module.exports = CityRepository;
