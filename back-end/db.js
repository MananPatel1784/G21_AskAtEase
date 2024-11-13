const mongoose=require('mongoose')
const url="mongodb+srv://jayeshdpadiya1802:Jayesh@123@cluster0.rlelz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

module.exports.connect=()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log('MongoDB connected Successfully')
    }).catch((error)=>console.log("Error:", error));
}
