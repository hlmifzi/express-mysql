const express = require('express')
const router = express.Router()
const validate = require('express-validation')
const ModelValid = require('../middleware/validation/model.validation')
const ApiResponse = require('../model/apiResponse')
const bcrypt = require('bcrypt')
const user = require('../model/user')
const Jwt = require('jsonwebtoken')
const config = require('../config/config')

router.post('/login', validate(ModelValid.login), async (req, res) => {
   try {
      let data = await user.findOne({ where: { username: req.body.username } })
      let check = await bcrypt.compare(req.body.password, data.password)
      if (check) {
         let token = await Jwt.sign(config.payLoad, config.secretKey)
         res.json(ApiResponse.ok('Login success!', { token: token }))
      } else {
         res.json(ApiResponse.unAuthorized())
      }
   } catch (err) {
      console.log(err)
      res.json(ApiResponse.unknownError('Unknown Error', err))
   }
})


router.post('/register', validate(ModelValid.register), async (req, res) => {
   try {
      let hash = await bcrypt.hash(req.body.password, 10)
      req.body['password'] = hash

      let data = await user.create(req.body)
      if (data) {
         delete data.dataValues['password']
         res.json(ApiResponse.created(data))
      } else {
         res.json(ApiResponse.unProcessableEntity())
      }
   } catch (err) {
      res.json(ApiResponse.unknownError())
   }
})

module.exports = router