import {MongoClient} from "mongodb"

const dbname= "nextjs_test"
const client = new MongoClient("mongodb://127.0.0.1:27017/"+dbname)


export default async function handle(req,res){
    await client.connect()
    const db = client.db(dbname);
    const collection = db.collection('users');
    const users = await collection.find().toArray()
    res.status(200).json({users})
}