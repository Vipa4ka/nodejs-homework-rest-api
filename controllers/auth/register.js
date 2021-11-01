const { Conflict } = require('http-errors')
const { User } = require('../../models')
const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')
const { nanoid } = require('nanoid')
const { sendEmail } = require('../../helpers')

const register = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }
  const avatarURL = gravatar.url(email)
  const verifyToken = nanoid()
  const hashPassward = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  const newUser = new User({ email, avatarURL, verifyToken })

  await User.create({ email, password: hashPassward, avatarURL, verifyToken })
  const mail = {
    to: email,
    subject: 'Подтверждение регистрации на сайте',
    html: `
    <a target= "_blank"
     href="http://localhost:3000/api/users/verify/${verifyToken}">
    Нажмите для подтверждения email
    </a>`,
  }
  sendEmail(mail)
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
