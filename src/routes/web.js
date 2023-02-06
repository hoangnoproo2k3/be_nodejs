const express = require('express')
const router = express.Router()
const { getHomePage, getABC, createUse, createNewUser, updateUser, updateUserNewController, deleteUser, destroyUser } = require('../controllers/homeController')

router.get('/', getHomePage);
router.get('/test', getABC)
router.get('/create', createNewUser)
router.get('/update/:userId', updateUser)
router.post('/delete-user/:userId', deleteUser)
router.post('/delete/:userId', destroyUser)
router.post('/create-user', createUse)
router.post('/update-user', updateUserNewController)
module.exports = router