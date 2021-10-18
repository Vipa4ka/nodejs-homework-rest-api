const CreateError = require('http-errors')
const { Contact } = require('../models')

const updateContactById = async (req, res) => {
  const { id } = req.params
  const contact = await Contact.findByIdAndUpdate(id, req.body, { new: true })
  if (!contact) {
    throw new CreateError(404, `Contact with id=${id} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'file was updated',
    data: { contact }
  }
  )
}

module.exports = updateContactById
