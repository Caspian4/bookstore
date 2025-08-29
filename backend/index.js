const express=require('express')
const app=express()
const PORT=process.env.PORT || 5001
const mongo = process.env.MONGO_URI
require('dotenv').config()

app.use(express.json());
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect(mongo)
.then(console.log("Connected"))
.catch((err)=>console.log(err));

const Book =require('./models/books')
app.use(cors())
app.get("/",(req,res)=>{
    res.send("I like Books")
})
app.get("/books",async(req,res)=>{
    try{
        const books = await Book.find()
        res.status(200).json(books)
    }
    catch(err){
        res.status(500).json({message:"Failed to fetch books"})
    }
})
app.post("/books",async(req,res)=>{
    try{
    const {title,author,year} = req.body
    const book = new Book({title,author,year})
    await book.save().then((data)=>{
        res.json(data)
    })}
    catch(err){
        res.status(500).json({message:"Failed to add book"})
    }
})
app.put('/books/:id',async(req,res)=>{
    const {title,author,year} = req.body
    try{
        const updateBook = await Book.findByIdAndUpdate(req.params.id,{title,author,year},{new:true})
        if(!updateBook) return res.status(404).json({message:"Book not found"})
        res.json(updateBook)
    }
    catch(err){
        res.status(500).json({message:"Failed to update book"})
    }
})
app.get('/books/:id',async (req,res)=>{
    try{
        const book =await Book.findById(req.params.id)
        if(!book) return res.status(404).json({message:"Book not found"})
        res.json(book)
        console.log("The book id is "+req.params.id)
    }
    catch(err){
        res.status(500).json({message:"Failed to fetch book"})
    }
})
app.delete('/books/:id',async (req,res)=>{
    try{
        const deletedBook = await Book.findByIdAndDelete(req.params.id)
        if(!deletedBook) return res.status(404).json({message:"Book not found"})
        res.json({message:"Book Deleted"})
    }catch(err){
        res.status(500).json({message:"Failed to delete book"})
    }
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})