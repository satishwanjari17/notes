const User = require('../model/user.model.js');

exports.createUser = (req,res)=>{
    User.find({username:req.body.userName})
    .then(user => {
        if(!user) {
            // res.send(note);
            // Create a user
                const user = new User({
                    username: req.body.username,
                    password: req.body.password
                });

                // Save Note in the database
                user.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the user."
                });
            });
        }else{
                return res.status(500).send({
                    message: "Username alredy exist "
                });            

        }
    }).catch(err => {
        return res.status(500).send({
            message: "Error during geristration "
        });
    });
}


exports.loginUser = (req,res)=>{
    User.find({username:req.body.userName,password:req.body.password})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "username or password wrong "
            });            
        }
        res.send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
}