const mongoose = require('mongoose')

const connectDB = async() =>{
    try{
        const con = await mongoose.connect(process.env.DB)

        console.log(`MongoDB connected ${con.connection.host}`);
    }catch(error){
        console.log(error);
        process.exit(1)
    }
}
 
module.exports = connectDB