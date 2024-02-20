import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.routes.js"
import authRoute from "./routes/auth.routes.js"
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

app.use(express.json());
app.listen(3000, () => {
  console.log("server is running on 3000 port");
});

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);