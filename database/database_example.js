const Sequelize = require("sequelize");

const connection = new Sequelize('database_name', 'login', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;