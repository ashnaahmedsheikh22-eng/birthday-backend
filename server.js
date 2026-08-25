const express = require("express");
const router = require("./routes/routes");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

// Routes
app.use("/auth", router);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(PORT, "0.0.0.0",() => {
  console.log(`app is running on ${PORT}`);
});