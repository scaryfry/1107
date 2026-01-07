import express from "express";
import * as db from "./db.js"

const PORT = 3011;

const app = express();

app.use(express.json())

app.get("/api/books", (req, res) => {
    const books = db.getAllProducts()
    res.status(200).json(books);
})
app.get("/api/books/:id", (req, res) => {
    const book = db.getProductById(req.params.id)
    res.status(200).json(book);
})
app.post("/api/books", (req, res) =>{
    const {title, author, year} = req.body;
    if(!title || !author || !year) {
        res.status(400).json({message: "Fields cannot be empty!"})
    }
    db.saveProduct(title, author, year)
    res.status(201).json({message: "Successfully created!"})
})
app.put("/api/books/:id", (req, res) => {
    const book = db.getProductById(req.params.id)
    if(book){
        res.status(400).json({message: "Cannot find this book!"})
    }
    const {title, author, year} = req.body;
    if(!title || !author || !year) {
        res.status(400).json({message: "Fields cannot be empty!"})
    }
    db.updateProduct(id, title, author, year)
    res.status(200).json({message: "Successful update!"})
})
app.delete("/api/books/:id", (req, res) => {
    const book = db.getProductById(req.params.id)
    if(book){
        res.status(400).json({message: "Cannot find this book!"})
    }
    db.deleteProduct(req.params.id);
    res.status(200).json({message: "Successful delete!"})

})
app.listen(PORT , () => {
    console.log(`App listens on PORT: ${PORT}`)
})
