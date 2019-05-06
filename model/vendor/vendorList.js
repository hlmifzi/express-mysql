const Sequelize = require('sequelize')
const sequelize = require('../../config/datasource')

const vendorList = sequelize.define('vw_vendor_list', {
   id_vendor: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
   kategori_vendor: { type: Sequelize.INTEGER },
   nm_kategori_vendor: { type: Sequelize.STRING },
   nm_vendor: { type: Sequelize.STRING },

}, { timestamps: false })

module.exports = vendorList