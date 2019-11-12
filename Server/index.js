import {
    Schema,
    model
} from "mongoose";

const express = require("express");
const mongoose = require("mongoose");

const app = express();
require("./hash")
mongoose.connect("mongodb+srv://Hugo:<password>@cluster0-g63l9.mongodb.net/test?retryWrites=true&w=majority");

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
});
const User = model("User", userSchema);

const user = new User({
    name: "Hugo Persson",
    email: "hugopersson7@gmail.com",
    password: "password"
});
user.save((err) => {
    if (err) return console.log("error" + err);
    console.log("document saved");
})
const port = process.env.PORT || 3700;