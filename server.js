import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

//app config
const app = express();
const PORT = process.env.PORT || 5000;

//middleware

//database
mongoose.connect("mongodb://localhost/testDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected db");
});
//api endpoints
app.get("/", (req, res) => {
  res.send("hello");
});

//heroku step
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//listener
app.listen(PORT, () => {
  console.log(` server running on ${PORT}`);
});
