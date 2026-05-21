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
        return new URL(a.attribs['href'], 'http://books.toscrape.com/').href
    })
    return detailUrls
}

async function getBookDetail(detailUrl){
    const res = await axios.get(detailUrl)
    const data = res.data
    const $ = cheerio.load(data)
    const bookname = $('.product_main h1').text().trim()
    return bookname
}

getBookList().then((res)=>{
    const promises = []
    res.forEach(async (item) => {
        promises.push(getBookDetail(item))
    })
    Promise.allSettled(promises).then((res)=>{
        const arr = res.map(item => item.value)
        console.log(arr,'arr---')
    })
})