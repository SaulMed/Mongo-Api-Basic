import mongoose from 'mongoose';

export default mongoose.connect(process.env.MONGO_URI)
.then( db => console.log("Database is connected."))
.catch(err=> console.log(`Error: ${err}`))