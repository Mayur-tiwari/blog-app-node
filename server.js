const app = require("./app");
const dotenv = require("dotenv");
const connectDataBase = require("./config/database");


dotenv.config({path: "./config/config.env"})

connectDataBase();



const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})

process.on("unhandledRejection", (err) => {
    console.log(`Error; ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise Rejection');

    server.close(() => {
        process.exit(1);
    })
})

process.on("uncaughtException", (err) => {
    console.log(`Error; ${err.message}`);
    console.log('Shutting down the server due to Unhandled Uncaught Exception');

        process.exit(1);  
})