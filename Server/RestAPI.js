module.exports = () => {
    const express = require("express");
    const app = express();
    const mongoose = require("mongoose");
    startExpress();

    function startExpress() {
        const port = process.env.PORT || "8000";
        app.use(express.json());
        app.listen(port, () => console.log("Port: " + port))

        return app;
    }

    const authentication = require("./Authentication");
    const models = require("./MongooseModels");
    const {
        User
    } = models;


    app.post("/confirmUser", async (req, res) => {
        try {
            const {
                userToken,
                verificationCode
            } = req.body;
            if (!userToken) {
                res.json({
                    error: true,
                    message: "missing userToken from body"
                });
                return;
            }
            if (!verificationCode) {
                res.json({
                    error: true,
                    message: "missing verificationCode from body"
                });
                return;
            }
            const decodedUser = await authentication.decodeJsonToken(userToken);
            const {
                name,
                email
            } = decodedUser;
            console.log(decodedUser.verificationCode);
            console.log(verificationCode);
            if (verificationCode == decodedUser.verificationCode) {
                // User has verified email
                const newUser = new User({
                    name: name,
                    email: email,
                    admin: false
                });

                await newUser.save();
                res.json({
                    error: false,
                    message: "User added"
                });

            } else {
                res.json({
                    error: true,
                    message: "Wrong verification code"
                });
            }
        } catch (err) {
            res.json({
                error: true,
                message: err
            });
        }
    });
    app.post("/registerUser", async (req, res) => {
        console.log("request");
        try {

            const {
                name,
                email
            } = req.body;
            const verificationCode = Math.round(Math.random() * 1000000);
            const user = {
                name: name,
                email: email,
                verificationCode: verificationCode
            };
            console.log(verificationCode);
            const token = await authentication.createJsonToken(user);
            res.json({
                error: false,
                data: {
                    token: token
                },
                message: "Verify your email"
            });
        } catch (err) {
            console.log(err);
            res.json({
                error: true,
                message: err
            });
        }
    });

    app.post("/login", (req, res) => {

    });

    app.post("/registerOrder", (req, res) => {

    });
}