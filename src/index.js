const express = require('express');
const {PORT}= require('./config/serverConfig') 
const bodyParser = require('body-parser');
const CityRepository = require('./repository/city-repository');

const ApiRoutes = require('./routes/index');

const  setupAndStartServer = async ()=>{
    const app =  express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', ApiRoutes);

    app.listen(PORT, async ()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
        const repo = new CityRepository();
        
        // const airports = await Airport.findAll();
        // console.log(airports);
        
        
    });

}

setupAndStartServer();



