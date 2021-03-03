const User = require('../../Models/User')

exports.list = (req, res) => {
    // refuse if not an admin
    if(!req.decoded.admin) {
        return res.status(403).json({
            message: 'you are not a Doctor'
        })
    }

    User.find({}, '-password').exec()
    .then(
        users=> {
            res.json({users})
        }
    )

}


