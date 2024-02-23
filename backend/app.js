import express from "express";
import morgan from "morgan";
import User from "./models/userModels.js";
import Meeting from "./models/meetingModels.js";
const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>server</h1>");
});

app.get('/user',async(req,res)=>{
    try {
        const user=await User.findAll({
            
        });
        return   res.status(200).json(user)
    } catch (error) {
        return res.status(404).json({message: error})
    }
})

app.get('/meeting',async(req,res)=>{
  try {
      const meeting=await Meeting.findAll(
      );
      return   res.status(200).json(meeting)
  } catch (error) {
      return res.status(404).json({message: error})
  }
})





export default app;
