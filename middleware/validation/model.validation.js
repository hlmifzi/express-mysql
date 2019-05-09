const Joi = require('joi')

module.exports = {
   user: {
      body: {
         username: Joi.string().required(),
         level: Joi.number().required()
      }
   },
   register: {
      body: {
         username: Joi.string().required(),
         password: Joi.string().required(),
      }
   },
   login: {
      body: {
         username: Joi.string().required(),
         password: Joi.string().required(),
      }
   }
}