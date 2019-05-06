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
   },
   updateListKehadiran: {
      params: {
         id: Joi.number().required()
      },
      body: {
         id_status_undangan: Joi.number().required(),
         ucapan: Joi.string().required(),
      }

   }
}