const Sequelize = require('sequelize')
const sequelize = require('../config/datasource')

const User = sequelize.define('m_user_apis', {
   id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
   username: { type: Sequelize.STRING },
   password: { type: Sequelize.STRING },
   level: { type: Sequelize.INTEGER }
}, { timestamps: false })

module.exports = User