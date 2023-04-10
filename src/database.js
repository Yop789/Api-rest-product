import mongoose from "mongoose";

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://2000djpz:lmXQUP3gN37hauJr@cluster0.npo2fgu.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000, // aumenta el tiempo de espera de la selección del servidor
  socketTimeoutMS: 45000, // aumenta el tiempo de espera del socket
  keepAlive: true,
  keepAliveInitialDelay: 300000
})
.then(db => console.log('Db is connected'))
.catch(error => console.log(error))