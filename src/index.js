import app from './app'
import "./database.js";
app.set('port',process.env.PORT || 4400)
app.listen(app.get('port'),()=>{
    console.log('server listen on port',app.get('port'))
});

