const {AirportService} = require('../services/index')

const create = async (req, res) => {
    try {

        const airport = await AirportService.create(req.body)
        return res.status(201).json({
            data: airport,
            success: true,
            message: 'Airport created successfully'
        });


        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message: 'Cannot create airport'
        });
        
        
    }
}
module.exports = {
    create
}
