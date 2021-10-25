const express = require('express')
const router = express.Router()

const ctrl = require('../../controllers')
const { controllerWrapper, validation, authenticate } = require('../../middlewares')

const { joiSchema } = require('../../models/contact')

router.get('/', authenticate, controllerWrapper(ctrl.listContacts))

router.get('/:id', authenticate, controllerWrapper(ctrl.getContactById))

router.post('/', authenticate, validation(joiSchema), controllerWrapper(ctrl.addContact))

router.delete('/:id', authenticate, controllerWrapper(ctrl.removeContact))

router.patch('/:id', authenticate, validation(joiSchema), controllerWrapper(ctrl.updateContactById))

router.patch('/:id/favorite', authenticate, controllerWrapper(ctrl.updateStatusContact))

module.exports = router
