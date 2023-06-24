import clientPromise from "../../../models/mongo";
export default async function handler(req, res){
    const client = await clientPromise;
    const db = client.db("freelance-demo");
     let bodyObject = req.body;
    try{
        if(req.body){
            let user = await db.collection('UserDetails').insertOne(bodyObject);
            res.json({message:"User Created Successfully",data:user});
        }else{
            res.json({error:"Insufficiant Data"});
        }
    }
    catch(err) {
        console.log(err)
        res.json({message:"Something went wrong"});
    }
}