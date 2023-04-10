import mongoose from "mongoose";

mongoose.set('strictQuery', true);
mongoose.connect("mmongodb+srv://2000djpz:<password>@cluster0.npo2fgu.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Db is connected'))
.catch(error => console.log(error))