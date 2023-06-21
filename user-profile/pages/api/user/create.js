const UserDetails = require("../../../models/User") 

export default async function(req, res){
    const newUser = new UserDetails({});
    try{
        await newUser.save();
        res.status(200).json({result: "created"})
    }
    catch(err) {
        console.log(err)
    }
}