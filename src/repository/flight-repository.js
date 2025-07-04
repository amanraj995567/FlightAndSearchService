const { model } = require('mongoose');
const {Flights} = require('../models/index');

class FlightRepository {


  async createFlight(flightData) {
    try {
      const flight = await Flights.create(flightData);
      return flight;
    } catch (error) {
      throw new Error(`Error creating flight: ${error.message}`);
    }
  }





  async getFlightById(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      if (!flight) {
        throw new Error('Flight not found');
      }
      return flight;
    } catch (error) {
      throw new Error(`Error fetching flight: ${error.message}`);
    }
  }





  async getAllFlights() {
    try {
      const flights = await Flights.findAll();
      return flights;
    } catch (error) {
      throw new Error(`Error fetching flights: ${error.message}`);
    }
  }
}

model.exports = FlightRepository;