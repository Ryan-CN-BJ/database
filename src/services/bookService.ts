import Book, { BookCreationAttributes } from "../model/book.js";

export function addBook(book:BookCreationAttributes){
    return Book.create(book)
}

export function deleteBook(id:number){
    return Book.destroy({where:{id}})
}

export function updateBook(id:number,book:BookCreationAttributes){
    return Book.update(book,{where:{id}})
}