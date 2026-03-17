const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'apex-analytics';
const collectionName = 'metrics';
async function getData() {
    const client = new MongoClient(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const data = await collection.find({}).toArray();
    client.close();
    return data;
}
module.exports = { getData };