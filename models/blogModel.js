const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter Blog Title"]
    },
    content: {
        type: String,
        required: [true, "Please Enter Blog Content"]
    }
})

module.exports = mongoose.model("Blog", blogSchema)