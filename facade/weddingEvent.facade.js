const express = require('express')
const router = express.Router()
const validate = require('express-validation')
const ApiResponse = require('../model/apiResponse')
const Joi = require('joi')
const ModelValid = require('../middleware/validation/model.validation')

const weddingEvent = require('../model/wedding/weddingEvent')
const weddingEventDetail = require('../model/wedding/weddingEventDetail')
const weddingEventInvitationCategori = require('../model/wedding/weddingEventInvitationCategori')
const weddingEventInvitationList = require('../model/wedding/weddingEventInvitationList')

router.get('/', async (req, res, next) => {
   try {
      let datas = await weddingEvent.findAll()
      res.json(ApiResponse.ok('ok bos', datas));
   } catch (err) {
      next(err)
   }
})

router.post('/:kd_undangan', validate({
   kd_undangan: Joi.string().required()
}), async (req, res, next) => {
   try {
      let data = await weddingEventDetail.findOne({ where: { kd_undangan: req.params.kd_undangan } })
      res.json(ApiResponse.ok('Berhasil', data))
   } catch (err) {
      next(err)
   }
})

router.get('/InvitationCategory/:id', async (req, res, next) => {
   try {
      let datas = await weddingEventInvitationCategori.findAll({ where: { id_undangan: req.params.id } })
      res.json(ApiResponse.ok('Berhasil Mendapatkan Kategori Undangan', datas));
   } catch (err) {
      next(err)
   }
})


router.get('/InvitationList/:kd_undangan', async (req, res, next) => {
   try {
      let datas = await weddingEventInvitationList.findAll({ where: { kd_undangan: req.params.kd_undangan } })

      res.json(ApiResponse.ok('Berhasil Mendapatkan Kategori Undangan', datas));
   } catch (err) {
      next(err)
   }
})

router.put('/UpdateListKehadiran/:id', validate(ModelValid.updateListKehadiran), async (req, res, next) => {
   try {
      let data = await weddingEventInvitationList.update(
         {
            id_status_undangan: req.body.id_status_undangan,
            ucapan: req.body.ucapan,
            date_updated: Date.now()
         },
         {
            where:
               { id_undangan_list_hehadiran: req.params.id }
         }
      )
      res.json(ApiResponse.ok('Berhasil Update', data))
   } catch (err) {
      next(err)
   }
})


module.exports = router