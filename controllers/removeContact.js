const CreateError = require('http-errors')
const { Contact } = require('../models')

const removeContact = async (req, res) => {
  const { id } = req.params
  const contact = await Contact.findByIdAndDelete(id)
  if (!contact) {
    throw new CreateError(404, `Contact with id=${id} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'Success delete'
  })
}

module.exports = removeContact
