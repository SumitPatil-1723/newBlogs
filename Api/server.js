import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(
 process.env.MongoURL
)
.then( ()=>{
    console.log("Mongo Connected  ")
});
const app = express();

app.listen(3000, () => {
  console.log("server is running on 3000 port");
});
