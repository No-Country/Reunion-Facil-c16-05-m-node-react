import express from "express";
import morgan from "morgan";
import meetingRouter from "./routes/meeting.route.js";
import userRouter from "./routes/user.route.js";
import cors from 'cors';
const app = express();


//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extends:false}));

app.get("/", (_req, res) => {
  res.send("<h1>server</h1>");
});

// /api/
app.use("/api/v1", meetingRouter);
app.use("/api/v1", userRouter)
export default app;
