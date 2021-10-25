const { Contact } = require('../models')

const listContacts = async (req, res) => {
  const { _id } = req.user

  const { page = 1, limit = 20 } = req.query
  const skip = (page - 1) * limit

  const contacts = await Contact.find({ owner: _id },
    '_id name email phone favorite', { skip, limit: +limit }).populate('owner', 'email')

  res.json({
    status: 'success',
    code: 200,
    data: { contacts }
  })
}
module.exports = listContacts
