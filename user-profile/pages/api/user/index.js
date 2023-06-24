
import clientPromise from "../../../models/mongo";
export default async function handler(req, res){
    const client = await clientPromise;
    const db = client.db("freelance-demo");
    try{
      const allUsers = await db.collection("UserDetails").find({}).sort({_id:-1}).toArray();
      res.json({ status: 200, data: allUsers });
    }
    catch(err) {
        console.log(err)
        res.json({message:"Something went wrong"});
    }
}
