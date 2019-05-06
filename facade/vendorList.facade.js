const express = require('express')
const router = express.Router()
// const validate = require('express-validation')
const ApiResponse = require('../model/apiResponse')
// const Joi = require('joi')
// const ModelValid = require('../middleware/validation/model.validation')

const vendorList = require('../model/vendor/vendorList')
const vendorCategoryList = require('../model/vendor/vendorCatgeoryList')

router.get('/', async (req, res, next) => {
   try {
      let datas = await vendorList.findAll()
      res.json(ApiResponse.ok('ok bos', datas));
   } catch (err) {
      next(err)
   }
})

router.get('/kategori', async (req, res, next) => {
   try {
      let datas = await vendorCategoryList.findAll()
      res.json(ApiResponse.ok('ok bos', datas));
   } catch (err) {
      next(err)
   }
})

module.exports = router