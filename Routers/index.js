const router = require('express').Router()
const authMiddleware = require('../Middlewares/Auth')
const auth = require('./auth')
const user = require('./user')


const {
    getAllSkins,getAllSlinkShots,
    newSkin,newSlinkShot,newUserDetails,newFollowerForUserDetails,newSlinkShotForUserDetails,
    getUserDetailsById
} = require('../Controller/Controller')

//Auth
router.use('/auth', auth)
router.use('/user', authMiddleware)
router.use('/user', user)

//Other
router.use('/getAllSkins', getAllSkins)
router.use('/getAllSlinkShots', getAllSlinkShots)
router.use('/newSkin', newSkin)
router.use('/newSlinkShot', newSlinkShot)
router.use('/newUserDetails', newUserDetails)
router.use('/newFollowerForUserDetails', newFollowerForUserDetails)
router.use('/newSlinkShotForUserDetails', newSlinkShotForUserDetails)
router.use('/getUserDetailsById', getUserDetailsById)

// router.get('/', getHome)
// router.get('/about', getAbout)



module.exports = router