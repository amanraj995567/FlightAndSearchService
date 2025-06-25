const {City} = require('../models/index');


class CityRepository{

    /////////////////////
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;

        }
        catch(error){
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    /////////////////////////
    async deleteCity({Cityid}){
        try{
           await City.destroy({
               where:{
                   id : Cityid
               }
           });
           return true;
        }
        catch(error){
            console.log("Something went wrong in repository layer");
            throw {error}
        }
    }


    /////////////////

    async updateCity(cityId,data){
        try{
            const city = await City.updateCity(data,{
                where:{
                    id : cityId
                }
            });
            return city;
        }
        catch(error){
            console.log("Something went wrong in repository layer");
            throw {error}
        }
    }


    ////////////////////////////
    async getCity(cityId){
        try{
           const city = await City.findByPK(cityId);
           return city;
        }
        catch(error){
             console.log("Something went wrong in repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;