//Entire file by Manan
const loadAuth = (req, res) => {
    res.render('auth');
}
const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log(`Connected to the ${dbname} database`);
    } catch (err) {
        console.error(`Error connecting to the database: ${err}`);
    }
};

const successGoogleLogin = async (req , res) => { 
	if(!req.user) 
		res.redirect('/failure');
    //console.log(req.user);
	res.send("Welcome " + req.user.email); 
    const EmailID = req.user.email;
    const User_Name = req.user.displayName;

    const { MongoClient } = require("mongodb")
    const uri = "mongodb+srv://202201310:AskAtEase1234@askatease.rysvf.mongodb.net/?retryWrites=true&w=majority&appName=AskAtEase"

    const client = new MongoClient(uri)

    const dbname = "AskAtEase"
    const collection_name="Users"

    const usersCollection = client.db(dbname).collection(collection_name)
    try {
        await connectToDatabase();
        const num = await usersCollection.countDocuments({email: EmailID})
        let result;
        if(num==0){
            result = await usersCollection.insertOne({email: EmailID, name: User_Name})
            console.log(result);
        } else{
            console.log("User already exists")
        }

    } catch (err) {
        console.error(`Error connecting to the database: ${err}`);
    } finally {
        await client.close();
    }
}

const failureGoogleLogin = (req , res) => { 
	res.send("Error"); 
}

module.exports = {
    loadAuth,
    successGoogleLogin,
    failureGoogleLogin
}
