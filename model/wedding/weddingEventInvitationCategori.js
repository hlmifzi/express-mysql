const Sequelize = require('sequelize')
const sequelize = require('../../config/datasource')

const weddingEventInvitationCategori = sequelize.define('vw_diundang_kategori', {
   id_diundang_kategoris: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
   id_undangan: { type: Sequelize.INTEGER },
   nm_undangan: { type: Sequelize.STRING },
   nm_jenis_diundang: { type: Sequelize.STRING },
   jumlah: { type: Sequelize.NUMBER }
}, { timestamps: false })

module.exports = weddingEventInvitationCategori