import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.routes.js"

dotenv.config();
mongoose.connect(
 process.env.MongoURL
)
.then( ()=>{
    console.log("Mongo Connected  ")
})
.catch((err)=>{
console.log(err);
});
const app = express();

app.listen(3000, () => {
  console.log("server is running on 3000 port");
});

app.use('/api/user', userRoute);