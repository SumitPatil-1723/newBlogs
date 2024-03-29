import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.routes.js";
import authRoute from "./routes/auth.routes.js";
import postRoute from "./routes/post.routes.js";
import cookieParser from "cookie-parser";
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Mongo Connected  ")
}).catch((err)=>{
console.log(err);
});
const app = express();

app.use(express.json());
app.use(cookieParser());
app.listen(3000, () => {
  console.log("server is running on 3000 port");
});

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/post', postRoute)

app.use((err,req,res,next) =>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  res.status(statusCode).json({
    sucess: false,
    statusCode,
    message,
  })
})