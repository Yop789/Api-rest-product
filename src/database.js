import mongoose from "mongoose";

mongoose.set('strictQuery', true);
mongoose.connect("mmongodb+srv://2000djpz:lmXQUP3gN37hauJr@cluster0.npo2fgu.mongodb.net/test?retryWrites=true&w=majority",{
  serverSelectionTimeoutMS: 5000
})
.then(db => console.log('Db is connected'))
.catch(error => console.log(error))