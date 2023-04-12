import mongoose from "mongoose";

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/BD_Dofest",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Db is connected'))
.catch(error =>{
  console.log('No se conecto a la local')
  mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://2000djpz:lmXQUP3gN37hauJr@cluster0.npo2fgu.mongodb.net/?retryWrites=true&w=majority",{
  serverSelectionTimeoutMS: 5000
})
.then(db => console.log('Db is connected'))
.catch(error => console.log(error))
})
