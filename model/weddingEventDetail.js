const Sequelize = require('sequelize')
const sequelize = require('../config/datasource')

const weddingEventDetail = sequelize.define('vw_undangan_list', {
   id_undangan_header: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
   kd_undangan: { type: Sequelize.STRING },
   img_undangan: { type: Sequelize.STRING },
   nm_undangan: { type: Sequelize.STRING },
   nm_mempelai_pria_img: { type: Sequelize.STRING },
   nm_mempelai_wanita_img: { type: Sequelize.STRING },
   nm_mempelai_pria: { type: Sequelize.STRING },
   nm_mempelai_wanita: { type: Sequelize.STRING },
   nm_mp_ortu: { type: Sequelize.STRING },
   nm_mw_ortu: { type: Sequelize.STRING },
   isi_undangan: { type: Sequelize.STRING },
   tgl_acara_akad: { type: Sequelize.DATE },
   tmpt_acara_akad: { type: Sequelize.DATE },
   pukul_acara_akad_dari: { type: Sequelize.TIME },
   pukul_acara_akad_SAMPAI: { type: Sequelize.TIME },
   map_acara_akad: { type: Sequelize.STRING },
   tgl_acara_resepsi: { type: Sequelize.DATE },
   tmpt_acara_resepsi: { type: Sequelize.DATE },
   pukul_acara_resepsi_dari: { type: Sequelize.TIME },
   pukul_acara_resepsi_SAMPAI: { type: Sequelize.TIME },
   map_acara_resepsi: { type: Sequelize.STRING },
   no_hp: { type: Sequelize.STRING },
   email: { type: Sequelize.STRING },

   jumlah_undangan: { type: Sequelize.NUMBER }
}, { timestamps: false })

module.exports = weddingEventDetail