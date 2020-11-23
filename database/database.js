const Sequelize = require("sequelize");

const connection = new Sequelize('nodepress', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;