const express = require('express');
const {PORT}= require('./config/serverConfig') 

const  setupAndStartServer = async ()=>{
    const app =  express();

    app.listen(PORT,()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log(process.env);
    })

}

setupAndStartServer();



