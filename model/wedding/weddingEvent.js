const Sequelize = require('sequelize')
const sequelize = require('../../config/datasource')

const WeddingEvent = sequelize.define('vw_undangan_list', {
   id_undangan_header: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
   kd_undangan: { type: Sequelize.STRING },
   img_undangan: { type: Sequelize.STRING },
   nm_undangan: { type: Sequelize.STRING },
   jumlah_undangan: { type: Sequelize.NUMBER },
   tgl_acara_akad: { type: Sequelize.DATE },
   sisa_hari: { type: Sequelize.STRING }
}, { timestamps: false })

module.exports = WeddingEvent