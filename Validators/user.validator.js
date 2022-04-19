const Joi = require('joi');

const userValidator = (req, res, next) => {

    const schema = Joi.object({
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(4).required(),
        userName: Joi.string().min(4).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        isActive: Joi.boolean(),
        isDeleted: Joi.boolean(),
        role: Joi.string(),
        contactNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        profilePicture: Joi.string().empty('')
    })

    const body = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        isActive: req.body.isActive,
        isDeleted: req.body.isDeleted,
        role: req.body.role,
        contactNumber: req.body.contactNumber,
        profilePicture: req.body.profilePicture
    }

    // Validating requset body against Joi Schema
    const { error, value } = schema.validate(body)
    if (error) {
        res.status(400).json({ message: error })
    } else {
        req.body = value;
        next();
    }
}


module.exports = { userValidator }