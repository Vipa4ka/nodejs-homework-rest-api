const CreateError = require('http-errors')
const { Contact } = require('../models')

const getContactById = async (req, res) => {
  const { id } = req.params
  const contact = await Contact.findById(id, '_id name email phone favorite')
  if (!contact) {
    throw new CreateError(404, `Contact with id=${id} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    data: { contact }
  })
}

module.exports = getContactById
