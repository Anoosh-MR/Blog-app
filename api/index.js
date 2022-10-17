const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv').config()
const multer=require('multer')
const authRoute=require("./routes/auth")
const usersRoute=require("./routes/users")
const postsRoute=require("./routes/posts")
const CatRoute=require("./routes/category")
const path=require("path")


app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")))


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(console.log("connected to mongoDB"))
.catch((err)=>console.log(err));



const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images");
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name);
    },
    
});

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded")
})

// ROUTE

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/posts",postsRoute)
app.use("/api/category",CatRoute)





app.listen("5000",()=>{
    console.log("Backend is running...");
})