const { FlightRepository } = require('../repository/index');
const CrudService = require('./crud-service');

class FlightService extends CrudService {
  constructor() {
    const flightRepository = new FlightRepository();
    super(flightRepository);
  }
}

module.exports = FlightService;
