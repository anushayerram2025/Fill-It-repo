const { MongoClient, ServerApiVersion } = require('mongodb');
const path = require('path');

const dotenv = require('dotenv');


const envPath = path.resolve(__dirname, '.env');
dotenv.config({ path: envPath });

const user=process.env.USER_ID;
const pass=process.env.USER_KEY; 



const uri = "mongodb+srv://"+user+":"+pass+"@cluster0.ugfai6v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


var connectedDatabases={}
async function connectToDatabase(databaseName) {
  try {
    // Connect the client to the server
    if (!connectedDatabases[databaseName]){
    await client.connect();
    
    connectedDatabases[databaseName]=client.db(databaseName);
    console.log("Database connected");
    }
   
  } 
  catch{
    
}
  finally {
    // Ensures that the client will close when you finish/error
    //What does this close mean?????
    await client.close();
   // console.log(client.db("fill-it").collections);
  }
}

async function getCollection(collectionName,databaseName="fill-it"){

    await connectToDatabase(databaseName);

    return connectedDatabases[databaseName].collection[collectionName]

}


connectToDatabase("fill-it");
