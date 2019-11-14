module.exports = () => {
    const express = require("express");
    const app = express();;
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

    app.post("/confirmUser", (req, res) => {
        try{
            const {userToken} = req.body;
            const decodedUser = authentication.decodeJsonToken(userToken);

        }
        catch(err){

        }
    });
    app.post("/registerCustomer", async (req, res) => {
        console.log("request");
        try {

            const {
                name,
                email
            } = req.body;
            const confirmationCode = Math.random()*1000000;
            const user = {name:name,email:email,confirmationCode:confirmationCode};
            const token = authentication.createJsonToken(user);
            res.json({error:false,data:{token:token}});
        } catch (err) {
            console.log(err);
            res.json({error:true,error:err});
        }
    });

    app.post("/login", (req, res) => {

    });

    app.post("/registerOrder", (req, res) => {

    });
}