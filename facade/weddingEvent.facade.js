const express = require('express')
const router = express.Router()
const validate = require('express-validation')
const ApiResponse = require('../model/apiResponse')
const Joi = require('Joi')

const weddingEvent = require('../model/weddingEvent')
const weddingEventDetail = require('../model/weddingEventDetail')

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


{
   params: {
      id: Joi.number().required()
   }
}
module.exports = router