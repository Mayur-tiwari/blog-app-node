const express = require("express");
const blog = require("./routes/blogRoute");
const errorMiddleware = require("./middleware/error");


const app = express();


app.use(express.json());
app.use(errorMiddleware);

//Route imports
app.use("/api/v1", blog);

module.exports = app;