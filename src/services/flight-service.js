
const { FlightRepository, AirplaneRepository} = require('../repository/index');
 
class FlightService {

  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(flightData) {
      try {
        const airplane = await this.airplaneRepository.getAirplane(flightData.airplaneId);
        const flight = await this.flightRepository.createFlight({...flightData,totalSeats:airplane.capacity});
        return flight;
      } catch (error) {
        console.log("Something went wrong in service layer");
        throw {error}
        
      }
  }


}


module.exports = FlightService;