const Blog = require("../models/blogModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createBlog = catchAsyncErrors(async (req,res) => {
    const blog = Blog.create(req.body);

    res.status(201).json({
        success: true,
        blog
    })
})

exports.getBlog = catchAsyncErrors(async (req,res) => {
    const blogs = await Blog.find();

    res.status(200).json({
        success: true,
        blogs
    })
})

exports.getSingleBlog = catchAsyncErrors(async (req,res,next) => {
    const blog = await Blog.findById(req.params.id);

    if(!blog){
        return next(new ErrorHandler("Blog Not Found", 404));
    }

    res.status(200).json({
        success: true,
        blog
    })
})

exports.updateBlog = catchAsyncErrors(async (req,res,next) => {
    let blog = await Blog.findById(req.params.id);

    if(!blog)
        return next(new ErrorHandler(`Blog Not Found with id: ${req.params.id}`, 404));

    blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })

    res.status(200).json({
        success: true,
        blog
    })

})

exports.deleteBlog = catchAsyncErrors(async (req,res,next) => {
    const blog = await Blog.findById(req.params.id);

    if(!blog){
        return next(new ErrorHandler(`Blog Not Found with id: ${req.params.id}`, 404));
    }

    await blog.deleteOne(); 

    res.status(200).json({
        success: true,
        message: "Blog Deleted Successfully"
    })
})