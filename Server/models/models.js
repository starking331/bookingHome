const sequelize = require('../db');
const {DataTypes} = require('sequelize');



const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const House = sequelize.define('house',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    address: {type: DataTypes.STRING, allowNull:false},
    description: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull:false}
})

const Order = sequelize.define('order',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    user_id: {type: DataTypes.INTEGER, allowNull: true},
    house_id: {type: DataTypes.INTEGER, allowNull: true},
    name: {type: DataTypes.STRING, allowNull: true},
    phone: {type: DataTypes.STRING, allowNull:true},
    startDate: {type: DataTypes.DATEONLY, allowNull: true},
    endDate: {type: DataTypes.DATEONLY, allowNull: true},
    acceptDate: {type: DataTypes.DATEONLY, allowNull: true}
})

const UserHouse = sequelize.define('user_house', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

Order.hasMany(User);
User.belongsTo(Order);

Order.hasMany(House);
House.belongsTo(Order);

User.belongsToMany(House, {through: UserHouse});
House.belongsToMany(User, {through: UserHouse});

module.exports = {
    User,
    House,
    Order,
    UserHouse
}