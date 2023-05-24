const express = require("express");

const {getBlog,createBlog, getSingleBlog, deleteBlog, updateBlog} = require("../controllers/blogController");

const router = express.Router();

router.route("/blogs").get(getBlog);
router.route("/blog/new").post(createBlog);
router.route("/blog/:id").get(getSingleBlog).put(updateBlog).delete(deleteBlog);

module.exports = router;