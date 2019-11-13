const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
startApp();
async function startApp() {
    try {
        await mongoose.connect(process.env.MONGOURL);
        const app = startExpress();
        require("./RestAPI")(app, mongoose);
    } catch (err) {
        console.log(err);
    }
}

function startExpress() {
    const port = process.env.PORT || "8000";
    const app = express();

    app.listen(port, () => console.log("Port: " + port))

    return app;
}

async function mongooseTest() {
    const {
        Schema,
        model
    } = mongoose;
    const userSchema = new Schema({
        name: String,
        email: String,
        password: String,
    });
    const User = model("User", userSchema);

    console.log(await User.find());
}

/* const user = new User({
    name: "Hugo Persson",
    email: "hugopersson7@gmail.com",
    password: "password"
});
user.save((err) => {
    if (err) return console.log("error" + err);
    console.log("document saved");
}) */