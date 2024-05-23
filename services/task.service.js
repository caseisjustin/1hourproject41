import book from '../models/book.model.js';

const getAllbooks = async ()=>{
    try {
        const books = await book.find()
        if(books)
            return books
        else
            return false
    } catch (err) {
        console.log("error")
    }
}

const createBook = async (name, pages, price, author) =>{
    try {
        
    } catch (err) {
        
    }
}
export default {
    getAllbooks
}