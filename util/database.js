const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root' , '1204022', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize