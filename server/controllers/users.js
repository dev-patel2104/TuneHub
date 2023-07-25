const Users = require("../assets/users");
const uuid = require('uuid');

exports.getUsers = async (req, res) => {
    try{
        if(!Users || !Users.length){
            return res.status(404).json({success: false, data:"No users found!"});
        }
    }catch(err){
        return res.status(500).json({message: "Internal server error!"});
    }

    return res.status(200).json({message: "Users retrieved",success: true, users: Users});
}

exports.getUser = async (req,res) => {
    const id = req.params.id;
    let userExists = false;
    for(user in Users){
        if(Users[user].id == id){
            userExists = true;
            const userFound = Users[user];
            const userResponse = {
                email: userFound.email,
                firstName: userFound.firstName,
                id: userFound.id
            }
            return res.status(200).json({success: true, user: userResponse});
        }
    }

    if(!userExists){
        return res.status(404).json({success: false, data: "User not found!"});
    }
}

exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    let userExists = false;

    try{
        if(Object.keys(body).length == 0){
            return res.status(400).json({success: false, data:"Invalid request body!"});
        }
    }catch(err){
        return res.status(500).json({message: "Internal server error!"});
    }

    for(user in Users){
        if(Users[user].id == id){
            userExists = true;
            if("firstName" in body){
                Users[user].firstName = body.firstName;
            }

            if("email" in body){
                Users[user].email = body.email;
            }

            return res.status(200).json({success: true, message: "User updated!"});
        }
    }

    if(!userExists){
        return res.status(404).json({success: false, data: "User not found!"});
    }

}

exports.addUser = async (req, res) => {
    const body = req.body;
    const id = uuid.v4();

    try{
        if(Object.keys(body).length == 0){
            return res.status(400).json({success: false, data:"Invalid request body!"});
        }
    }catch(err){
        return res.status(500).json({message: "Internal server error!"});
    }

    body.id = id;
    Users.push(body);
    return res.status(200).json({success: true, id: id, message: "User added"});
}


