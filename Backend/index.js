import express from "express";
import users from "./dbuser.js"
import bdsong from "./dbsong.js"
import cors from "cors";
import path from 'path';
import {fileURLTOPath} from "url";

const __dirname=path.dirname(fileURLTOPath(import.meta.url)) // read or write the sma emodule inthe current director
const app=express();
const port=3000;

app.use(cors())
app.use(express.json());
cpnnection_url =process.env.MONGODB_URL


mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
})


app.get("/",(req,res)=>{
    res.send("helloe world")
});

app.listen(port,()=>{
    console.log(`example app listening on port${port}`);
})
