
const { NotFound } = require('http-errors')

const contactsFunctions = require('../model/contactsFunctions')

const listContacts = async (req, res, next) => {
  const contacts = await contactsFunctions.listContacts()
  res.json({
    status: 'success',
    code: 200,
    data: { contacts }
  })
}

const getContactById = async (req, res, next) => {
  const { idx } = req.params
  const contact = await contactsFunctions.getContactById(idx)
  if (!contact) {
    throw new NotFound(`Contact with id=${idx} not found`)
  }
  res.json(contact)
}

const addContact = async (req, res, next) => {
  const contact = await contactsFunctions.addContact(req.body)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: { contact }
  })
}

const updateContactById = async (req, res, next) => {
  const { id } = req.params
  const contact = await contactsFunctions.updateContactById(id, req.body)
  if (!contact) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'file was updated',
    data: { result: contact }
  })
}

const removeContact = async (req, res, next) => {
  const { id } = req.params
  const contact = await contactsFunctions.removeContact(id)
  if (!contact) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'Success delete'
  })
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContact,
}
