const express = require("express");
const app = express();
const User =require('./models/user')
require("dotenv").config();
require('./mongodb/db')
const cors = require('cors');
const userRouter = require('./router/user')



app.use(cors());
app.use(express.json())
app.use(userRouter)


app.get("/", (req, res) => {
  res.send("hello from back side");
});



app.listen(4200, () => {
  console.log("stage app server started on port 4200");
});
