const CrudService = require('./crud-service');
const { AirportRepository } = require('../repository/index');

class AirportService extends CrudService {
    constructor() {
        const airplaneRepository = new AirportRepository(repository);
        super(airplaneRepository);
    }

    // You can add more methods specific to AirportService here if needed
}

module.exports = AirportService;