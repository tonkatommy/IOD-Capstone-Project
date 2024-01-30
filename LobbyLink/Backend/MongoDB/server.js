const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
    "mongodb+srv://tommy-iod:Htp6agN7UKeXnmTP5@clusteriod.u2ctzxy.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );

        // Get the database and collection on which to run the operation
        const database = await client.db("iod-capstone");
        const personnelCollection = await database.collection("personnel");

        // Query for movies that have a runtime less than 15 minutes
        // const query = {};
        // const options = {
        //     // Sort returned documents in ascending order by title (A->Z)
        //     sort: { idNo: 1 },
        //     // Include only the `title` and `imdb` fields in each returned document
        //     projection: {},
        // };
        // Execute query
        const cursor = await personnelCollection.find();
        // Print a message if no documents were found
        if ((await personnelCollection.countDocuments()) === 0) {
            console.log("No documents found!");
        }
        // Print returned documents
        for await (const doc of cursor) {
            console.dir(doc);
        }
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        console.log("MongoDB Closed");
    }
}
run().catch(console.dir);
