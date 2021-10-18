const CreateError = require('http-errors')
const { Contact } = require('../models')

const updateStatusContact = async (req, res) => {
  const { id } = req.params
  const { favorite } = req.body
  const result = await Contact.findByIdAndUpdate(id, { favorite }, { new: true })
  if (!result) {
    throw new CreateError(404, 'Missing field favorite')
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'File was updated',
    data: { result }
  }
  )
}

module.exports = updateStatusContact
