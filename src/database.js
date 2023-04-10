import mongoose from "mongoose";

mongoose.set('strictQuery', true);
mongoose.connect(" mongodb+srv://2000djpz:lmXQUP3gN37hauJr@cluster0.npo2fgu.mongodb.net/test",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Db is connected'))
.catch(error => console.log(error))