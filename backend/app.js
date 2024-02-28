import express from "express";
import morgan from "morgan";
import meetingRouter from "./routes/meeting.route.js";
import userRouter from "./routes/user.route.js";
const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>server</h1>");
});

// /api/
app.use("/api/v1", meetingRouter);
app.use("/api/v1", userRouter)
export default app;
