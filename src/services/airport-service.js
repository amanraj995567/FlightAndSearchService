const CrudService = require('./crud-service');
const { AirportRepository } = require('../repository/index');

class AirportService extends CrudService {
    constructor() {
        const airplaneRepository = new AirportRepository(repository);
        super(airplaneRepository);
    }
}

module.exports = AirportService;