const express=require('express');
const CityControllers = require('../../controllers/city-controllers');

const router = express.Router();
const FlightController = require('../../controllers/flight-controllers');
const AirportController = require('../../controllers/airport-controllers');


router.post('/city',CityControllers.create);
router.delete('/city/:id', CityControllers.destroy);
router.get('/city/:id', CityControllers.get);
router.put('/city/:id', CityControllers.update);
router.get('/city', CityControllers.getAll);

router.post('/flight' , FlightController.create);
router.post('/airport', AirportController.create);
module.exports = router;


