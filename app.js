import express, { json } from 'express';
import http from 'http';
import './mysql.js'
import cors from 'cors'
import router from './routes.js';
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(json());
app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))

const server=http.createServer(app);


app.use("/apis",router)


server.listen(3000,()=>{
    console.log("started on port 3000")
})
