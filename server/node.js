scrapNode(){
const dedicatedbrand = require('dedicatedbrand');

const products = dedicatedbrand.scrape('https://www.dedicatedbrand.com/en/men/news');

products.forEach(product => {
  console.log(products.name);
})

const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs/promises');

const newestProducts = []

async function fetchDataDedicated(url){
    const response = await fetch(url)
    const data = await response.text()
    getProductsDedicated(data)
}


}
