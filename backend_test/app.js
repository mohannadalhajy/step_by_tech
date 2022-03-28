const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require('path');
const compression = require('compression')
const app = express();
require('./models/index.js') 
const membersRoute = require('./routes/Members.Router')
const usersRoute = require('./routes/Users.Router')
const teamsRoute = require('./routes/Teams.Route')
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression())
app.use(function (req, res, next) {
  let allowedOrigins = ["http://localhost:3000"]
  let origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin); // restrict it to the required domain
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.use('/members',membersRoute)
app.use('/teams',teamsRoute)
app.use('/users',usersRoute)

app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  }); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
