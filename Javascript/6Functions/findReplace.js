const { Collection } = require("mongodb");
const { MongoClient } = require("mongodb");

//MongoDb connection string
const uri = "mongodb://localhost:27017/my_blogs";

//connect to MongoDb
const client = new MongoClient(uri);

(async function insertDocuments() {
    try {
        await client.connect();
        console.log("connected to DB");

        //access the database and collection
        const database = client.db("my_blogs");
        const collection = database.collection("users");

        // Find documents matching a query using greater than operator 
        const query = { age: { $gt: 30 } }
        const cursor = collection.find(query)

        //iterate over the cursor to access the documents
        await cursor.forEach(document => {
            console.log('Found the document:', document)
        })


        //querying an array of elememts  
        const queryArr = { hobbies: 'gaming' } //find documents where gaming is a hobby 
        const cursorArr = collection.find(queryArr)

        //iterate through cursorArr and get all docs 
        await cursorArr.forEach(docs => {
            console.log('Found all dics where gaming is hobby', docs)
        })


        //querying using logical operators 
        const queryLogical = {
            $or: [
                { age: { $gt: 30 } }, // Find documents where age is greater than 30
                { hobbies: 'reading' } // or documents where 'reading' is a hobby
            ]
        }

        //get docs based on the logical operator
        const cursorLogical = collection.find(queryLogical)
        await cursorLogical.forEach(docs => {
            console.log('Found docs where reading is hobby', docs)
        })
    } catch (error) {
        console.error('Error finding documents:', error)
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
})
    ()
