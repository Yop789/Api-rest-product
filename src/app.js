import express,{ Application}  from "express";
import morgan from "morgan";
import pkg from "../package.json"
import path from 'path';
import { createRoles } from "./libs/initialSetup";
import router from "./routes/routes";
import cors from "cors"

const app = express();
createRoles();

app.set("pkg", pkg)
app.use(express.json())
app.use(morgan("dev"));

const corsOptions = {
  origin: ['https://doparty.onrender.com','http://localhost:4200'], // reemplace con la URL de su aplicación Angular
  optionsSuccessStatus: 200 // algunos navegadores restringen las respuestas a 204
}


app.use(cors(corsOptions));
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  });
});



app.use('/api/Dofest',router)

app.use('/api/Dofest/uploads', express.static(path.resolve('uploads')));
export default app;
