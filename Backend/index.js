// const express = require("express");
// const dotenv = require("dotenv");
// but we use import wala syntax to no this

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import coursRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongo
try {
  // mongoose.connect(URI, {
  //   useNewUrlParser: true,
  //   UseUnifiedTopology: true,
  // }
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // );
  console.log("Connected To MongoDB");
} catch (error) {
  console.log("Error: ", error);
}

// connected to Route
app.use("/Course", coursRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, world!" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
