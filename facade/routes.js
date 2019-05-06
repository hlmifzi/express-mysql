const express = require('express')
const router = express.Router()
const jwtAuth = require('../middleware/jwtauthorization')

let user = require('./user.facade')
let weddingEvent = require('./weddingEvent.facade')
let vendorList = require('./vendorList.facade')
let auth = require('./auth.facade')

router.use('/auth', auth)

router.use(jwtAuth)

router.use('/user', user)
router.use('/weddingEvent', weddingEvent)
router.use('/vendorList', vendorList)

module.exports = router