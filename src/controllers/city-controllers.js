const {CityService} = require('../services/index');


const cityService = new CityService();


const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City successfully created",
            error: {}
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        });
    }
};





const destroy = async (req , res)=>{
     try{
         const response = await cityService.deleteCity(req.params.id);
         return res.status(200).json({
         data:response,
         success:true,
         message:"Successfilly delete a city",
         error: {}
      })
    }

     catch(error){
         console.log(error);
         return res.status(501).json({
            data:{},
            success: false,
            message:"Not able to delete a city",
            err:error
         })
     } 

}


const get = async (req , res)=>{
    try{
         const city = await cityService.getCity(req.params.id);
         return res.status(202).json({
         data:city,
         success:true,
         message:"Successfilly fatch a city",
         error: {}
      })
          
    }
    catch(error){
         console.log(error);
         return res.status(502).json({
            data:{},
            success: false,
            message:"Not able to fetch a city",
            err:error
         })
    }
}


const update = async (req , res)=>{
    try{
         const city = await cityService.updateCity(req.params.id,req.body);
         return res.status(203).json({
         data:city,
         success:true,
         message:"Successfilly update a city",
         error: {}
      })
          
    }
    catch(error){
         console.log(error);
         return res.status(503).json({
            data:{},
            success: false,
            message:"Not able to update a city",
            err:error
         })
    }
}


const getAll = async (req,res)=>{
     try {   
        console.log(req.params);  
        const cities = await cityService.getAllCities(req.query);
        return res.status(201).json({
            data: cities,
            success: true,
            message: "All Cities successfully fetched",
            error: {}
        }); 
     } 
     catch (error) {
         console.log(error);
         return res.status(505).json({
            data:{},
            success: false,
            message:"Not able to fetch  any cities",
            err:error
         })
     }
}





module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}
