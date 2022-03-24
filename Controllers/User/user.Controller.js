const User = require('../../Models/user');
const bcrypt = require('bcrypt');

exports.signup = async (req, res, next) => {

    try {
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            isActive: true,
            isDeleted: false,
            contactNumber: req.body.contactNumber
        });

        if (user) {
            console.log(user);
            return res.status(200).json({ message: "User was registered Succesfully" });
        }
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}


exports.signin = {

}




exports.getUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    try {
        if (!user) {
            res.status(500).json({ message: "User not Found" });
        }
        else {
            res.status(200).send(user);
        }
    } catch (err) {
        res.send(500).send(err)
    }
}

exports.getAllUsers = async (req, res) => {
    const users = await User.find({});
    try {
        res.status(200).send(users)
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

exports.deleteUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id })
    try {
        if (user.isDeleted === true || !user) {
            res.status(500).json({ message: "User Does not Exist" });
        } else {
            user.isDeleted = true
            await user.save();
            res.status(200).json({ message: "User Deleted Succesfully" });
        }
    } catch (err) {
        res.status(500).json({ message: "Some Error Occured while deleting the User" });
    }

}

exports.updateUser = (req, res) => {
    console.log("over here ins");
    User.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                contactNumber: req.body.contactNumber,
            }
        }, (err, result) => {
            if (err) {
                return res.status(500).json({ msg: "Some Error Occured" })
            }
            else {
                console.log("over here");
                return res.status(200).json({ Message: "Data updated succesfully", user: req.body })
            }
        })

}

