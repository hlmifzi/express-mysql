const Sequelize = require('sequelize')
const sequelize = require('../../config/datasource')

const weddingEventInvitationList = sequelize.define('vw_diundang_list_kehadiran', {
   id_undangan_list_hehadiran: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
   id_undangan: { type: Sequelize.INTEGER },
   kd_undangan: { type: Sequelize.STRING },
   nm_undangan: { type: Sequelize.STRING },
   kd_undangan_kehadiran: { type: Sequelize.STRING },
   nm_diundang: { type: Sequelize.NUMBER },
   id_status_undangan: { type: Sequelize.INTEGER },
   nm_status: { type: Sequelize.STRING },
   ucapan: { type: Sequelize.STRING },
   date_added: { type: Sequelize.DATE },
   date_updated: { type: Sequelize.DATE },

}, { timestamps: false })

module.exports = weddingEventInvitationList