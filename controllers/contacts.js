
// const CreateError = require('http-errors')
// const { Contact } = require('../models')

// const listContacts = async (req, res) => {
//   const contacts = await Contact.find({}, '_id name email phone favorite')
//   res.json({
//     status: 'success',
//     code: 200,
//     data: { contacts }
//   })
// }
// const getContactById = async (req, res) => {
//   const { id } = req.params
//   const contact = await Contact.findById(id, '_id name email phone favorite')
//   if (!contact) {
//     throw new CreateError(404, `Contact with id=${id} not found`)
//   }
//   res.json({
//     status: 'success',
//     code: 200,
//     data: { contact }
//   })
// }

// const addContact = async (req, res) => {
//   const contact = await Contact.create(req.body)
//   res.status(201).json({
//     status: 'success',
//     code: 201,
//     data: { contact }
//   })
// }

// const updateContactById = async (req, res) => {
//   const { id } = req.params
//   const contact = await Contact.findByIdAndUpdate(id, req.body, { new: true })
//   if (!contact) {
//     throw new CreateError(404, `Contact with id=${id} not found`)
//   }
//   res.json({
//     status: 'success',
//     code: 200,
//     message: 'file was updated',
//     data: { contact }
//   }
//   )
// }

// const updateStatusContact = async (req, res) => {
//   const { id } = req.params
//   const { favorite } = req.body
//   const result = await Contact.findByIdAndUpdate(id, { favorite }, { new: true })
//   if (!result) {
//     throw new CreateError(404, 'Missing field favorite')
//   }
//   res.json({
//     status: 'success',
//     code: 200,
//     message: 'File was updated',
//     data: { result }
//   }
//   )
// }

// const removeContact = async (req, res) => {
//   const { id } = req.params
//   const contact = await Contact.findByIdAndDelete(id)
//   if (!contact) {
//     throw new CreateError(404, `Contact with id=${id} not found`)
//   }
//   res.json({
//     status: 'success',
//     code: 200,
//     message: 'Success delete'
//   })
// }

// module.exports = {
//   listContacts,
//   getContactById,
//   addContact,
//   updateContactById,
//   removeContact,
//   updateStatusContact,
// }
