import Mock from 'mockjs'
import Book from "../model/book.js";

export default function mockBook(){
    const books = Mock.mock({
        'datas|16':[
            {
                name:'@ctitle()',
                author:'@cname()',
                price:'@float(1,100)',
                imgurl:'@image("200x300")',
                publishDate:'@date("yyyy-MM-dd")',
            }
        ]
    }).datas
    Book.bulkCreate(books)
}