//packages import
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
// default middlewares configurations
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "28kb" }));
app.use(express.urlencoded({ extended: true, limit: "28kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome to Contact Microservice");
});

import userRouter from "./routes/user.route.js";
import messageRouter from "./routes/message.route.js";
import globalErrorHandler from "./utils/globalErrorHandler.js";
//user routes

app.use("/api/v1/user", userRouter);
app.use("/api/v1/message", messageRouter);
app.use("*", (req, res) => {
  res.status(404).json({
    message: `Requested Route ${req.originalUrl} does not exist`,
    status: 404,
  });
});

app.use(globalErrorHandler);
export default app;
