const uuid = require('uuid');
const path = require('path');
const {House} = require('../models/models');
const ApiError = require('../error/ApiError');
class HouseController{
    async create(req, res, next){
        try{
            const {name, address,  description, price} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
    
            const house = await House.create({name, address, description, price, img: fileName});
    
            return res.json(house);
        } catch(e){
            next(ApiError.badRequest(e.message));
        }
    }
    async getAll(req, res){
        const houses = await House.findAll();
        return res.json(houses);
    }
    async getOne(req, res){
        const {id} = req.params;
        const house = await House.findOne(
            {
                where: {id}
            }
        )
        return res.json(house);
    }
}

module.exports = new HouseController()