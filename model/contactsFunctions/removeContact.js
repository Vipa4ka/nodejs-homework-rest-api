const updateContacts = require('./updateContacts')
const listContacts = require('./listContacts')

const removeContact = async (id) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex(item => item.id === Number(id))
  if (idx === -1) {
    return null
  }

  contacts.splice(idx, 1)
  await updateContacts(contacts)
  return true

  //  второй вариант удаления
  // const newContact = contacts.filter((_, index) => index !== idx);
  // await updateContacts(newContact);
  // return true;
}

module.exports = removeContact
