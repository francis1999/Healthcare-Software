const express = require("express");
const app = express();
const db = require('./models');
const cors = require("cors");
const PORT = 5002;
//Routers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const ProductRoute = require("./routes/Products");
const postRouter = require("./routes/Posts");
const RegistrationtblRouter = require("./routes/Registrations");
app.use("/posts", postRouter);
app.use("/Products", ProductRoute);
app.use("/Registrations", RegistrationtblRouter);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Server Running on 5000 Port http://localhost:5002");
    });
})