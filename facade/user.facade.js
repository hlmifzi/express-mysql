const express = require('express')
const router = express.Router()
const validate = require('express-validation')
const ApiResponse = require('../model/apiResponse')
const Joi = require('joi')


const user = require('../model/user')

router.get('/:id', validate({
   params: {
      id: Joi.number().required()
   }
}), async (req, res, next) => {
   try {
      let data = await user.findByPk(req.params.id)
      res.json(ApiResponse.ok('data sukses', data))
   } catch (err) {
      next(err)
   }
})

module.exports = router