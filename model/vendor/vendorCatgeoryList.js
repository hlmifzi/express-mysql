const Sequelize = require('sequelize')
const sequelize = require('../../config/datasource')

const vendorCategoryList = sequelize.define('vw_vendor_kategori_lists', {
   id_kategori_vendor: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
   nm_kategori_vendor: { type: Sequelize.STRING },

}, { timestamps: false })

module.exports = vendorCategoryList