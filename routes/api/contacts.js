const express = require('express')
const router = express.Router()

const ctrl = require('../../controllers')
const { controllerWrapper, validation } = require('../../middlewares')

const { joiSchema } = require('../../models/contact')

router.get('/', controllerWrapper(ctrl.listContacts))

router.get('/:id', controllerWrapper(ctrl.getContactById))

router.post('/', validation(joiSchema), controllerWrapper(ctrl.addContact))

router.delete('/:id', controllerWrapper(ctrl.removeContact))

router.patch('/:id', validation(joiSchema), controllerWrapper(ctrl.updateContactById))

router.patch('/:id/favorite', controllerWrapper(ctrl.updateStatusContact))

module.exports = router
