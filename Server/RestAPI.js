module.exports = (app) => {
    console.log("start");


    const authentication = require("./Authentication");

    app.post("/registerCustomer", async (req, res) => {
        console.log("request");
        try {
            await authentication.generateHashedPassword();
        } catch (err) {
            console.log(err);
        }
    });

    app.post("/login", (req, res) => {

    });

    app.post("/registerOrder", (req, res) => {

    });
}