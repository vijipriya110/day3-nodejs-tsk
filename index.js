import  express from "express";
import { dbConnection } from "./db.js";
import { taskRouter } from "./Routes/task.js";
import dotenv from "dotenv";

//
dotenv.config();
const PORT = process.env.PORT


const app = express();

//middleware
app.use(express.json());
// app.use(cors());

//db connection 
dbConnection()

//routes


app.use("/task", taskRouter)

//server listner
app.listen(PORT, ()=>console.log("server runnig in localhost", `${PORT}`))
