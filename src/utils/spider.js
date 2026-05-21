//抓取豆瓣读书中的书籍信息
import axios from 'axios'
import * as cheerio from 'cheerio'

async function getBookHtml(){
    const res = await axios.get('http://books.toscrape.com/index.html')
    const data = res.data
    return data
}

async function getBookList(){
    const data = await getBookHtml()
    const $ = cheerio.load(data)
    const anchors = $('section li .product_pod .image_container a')
    const detailUrls = anchors.toArray().map((a) => {
        return a.attribs['href']
    })
    return detailUrls
}

async function getBookDetails(){
    const detailUrls = await getBookList()
    const urls = detailUrls.map((item) => {
        console.log(item,'item---')
        return  new URL(item, 'http://books.toscrape.com/').href
    })
    console.log(urls,'urls')
}

getBookDetails()