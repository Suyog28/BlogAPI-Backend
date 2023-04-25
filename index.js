const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json());

const blog = require("./routes/blog");
//Mount or Routing Mapping
app.use("/api/vi", blog);

const connectionDB = require("./config/database");
connectionDB();

//Server Starter
app.listen(PORT, () => {
    console.log(`App Is running on 3000 PORT ${PORT} `);
})

app.get("/", (req, res) => {
    res.send("This is home");
})