const {Airplane} = require('../models/index'); 

class AirplaneRepository {
    async getAirplane(id){

        try {

            const airplane = await Airplane.findByPk(id);
            return airplane;
            
        } catch (error) {

            throw new Error(`Error creating flight: ${error.message}`);
            
        }

    }
}

module.exports = AirplaneRepository;