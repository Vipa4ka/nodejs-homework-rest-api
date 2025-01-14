const { Schema, model } = require('mongoose')
const Joi = require('joi')

const userSchema = Schema({

  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  subscription: {
    type: String,
    enum: ['starter', 'pro', 'business'],
    default: 'starter'
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    required: true
  }
}, { versionKey: false, timestamps: true })

const joiSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required(),

})

const User = model('user', userSchema)

module.exports = {
  User,
  joiSchema
}
