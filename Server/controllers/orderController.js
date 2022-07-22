const path = require('path');
const {House, Order} = require('../models/models');
const ApiError = require('../error/ApiError');
const { Sequelize } = require('../db');
class OrderController{
    async create(req, res, next){
        const {name, phone,  startDate, endDate, acceptDate, user_id, house_id} = req.body;
        const order = await Order.create({name, phone, startDate, endDate, acceptDate, user_id, house_id});

        return res.json(order);
    }
    async getAll(req, res){
        const order = await Order.findAll();
        return res.json(order);
    }
    async getOne(req, res){
        const {id} = req.params;
        const order = await Order.findOne(
            {
                where: {id}
            }
        )
        return res.json(order);
    }
    async update(req, res){
        const {id} = req.params;
        const order = await Order.upsert({
            id: id,
            acceptDate: Sequelize.fn('NOW'),
          });
        return res.json(order);
    }

    async deleteOne(req, res){
        const {id} = req.params;
        const order = await Order.destroy(
            {
            where: {id}
            }
        );
        return res.json(order);
    }
}

module.exports = new OrderController()