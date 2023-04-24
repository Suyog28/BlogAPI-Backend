const mongoose = require("mongoose");

require("dotenv").config();

const connectionDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(console.log("DB Connected Successfully"))
        .catch((error) => {
            console.log("DB Connection Issue");
            console.log(error);
            process.exit(1);
        })
}

module.exports = connectionDB;