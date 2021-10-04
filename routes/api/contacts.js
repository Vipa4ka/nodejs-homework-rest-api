const express = require('express')
const router = express.Router()

const { contacts: ctrl } = require('../../controllers')
const { controllerWrapper, validation } = require('../../middlewares')
const { contactSchema } = require('../../schemas')
router.get('/', controllerWrapper(ctrl.listContacts))

router.get('/:idx', controllerWrapper(ctrl.getContactById))

router.post('/', validation(contactSchema), controllerWrapper(ctrl.addContact))

router.delete('/:id', controllerWrapper(ctrl.removeContact))

router.patch('/:id', validation(contactSchema), controllerWrapper(ctrl.updateContactById))

module.exports = router
