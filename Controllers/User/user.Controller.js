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
        else {
            return res.status(500).json({ message: err });
        }

    } catch (err) {
        console.log('error====> ', err);
        return res.status(500).json({ message: err });
    }

}


exports.signin = {

}

exports.getUser = async (req, res) => {
    try {
        const user = await User.findOne({_id:req.params.id});
        if(!user){
            res.status(500).json({message:"User not Found"});
        }        
        else{
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
