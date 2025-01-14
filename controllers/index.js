const addContact = require('./addContact')
const getContactById = require('./getContactById')
const listContacts = require('./listContacts')
const removeContact = require('./removeContact')
const updateContactById = require('./updateContactById')
const updateStatusContact = require('./updateStatusContact')

const auth = require('./auth')
const users = require('./users')

module.exports = {
  addContact,
  getContactById,
  listContacts,
  removeContact,
  updateContactById,
  updateStatusContact,
  auth,
  users,
}
