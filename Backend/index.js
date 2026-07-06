require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/user.js");

const app = express();
app.use(cors({}));
app.use(express.json());

app.get("/", (req, res) => {
  UserModel.find({})
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});
app.get("/getUser/:id", (req, res) => {
  console.log("Params:", req.params);

  const id = req.params.id;

  UserModel.findById(id)
    .then((user) => {
      console.log(user);
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;

  UserModel.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    },
    { new: true },
  )
    .then((user) => {
      console.log(user);
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected!");
    console.log("Database:", mongoose.connection.name);
    console.log("Host:", mongoose.connection.host);
  })
  .catch((err) => console.log(err));
app.listen(5000, () => {
  console.log("server is runing");
});

// module.exports = app;
