const { Conflict } = require('http-errors')
const { User } = require('../../models')
const bcrypt = require('bcryptjs')

const register = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }

  const hashPassward = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  const newUser = new User({ email })

  await User.create({ email, password: hashPassward })
  res.status(201).json({
    status: 'success',
    code: 201,
    message: 'Register success',
    data: {
      user: {
        email,
        subscription: newUser.subscription
      }
    }
  })
}

module.exports = register
