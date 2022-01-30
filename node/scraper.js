const puppeteer = require('puppeteer');
var { connection } = require('./db.js');
var  mv  = require('./middleware');
let sql =  connection(); 
const express = require('express');
const app = express();

app.post('/',mv, async (req, res) => {

    console.log(req.body);
    if(!req.body)
    return res.status(200).send({images:[],vedios:[]});

    let urls = req.body.url;
    let result = await getUrls(urls);
    await saveData(result);  
         
         
return res.status(200).send(result);
    

}
);


const saveData = async (result)=>{
    for(let i = 0; i <result.images;i++)
    {
        await (await sql).execute(`insert into urls (url,type) values ('${result.images[i]}','image'))`);
        await (await sql).execute(`insert into urls (url,type) values ('${result.vedios[i]}','vedio'))`);

    }
}

const getUrls = async (urls)=>{
    return new Promise(async (resolve, reject) => {
        let images = [];
    let vedios = [];
        
            await getImages(urls).then(x=>images=x).catch(err => {console.log(err)});
            await getVideos(urls).then(x=>vedios=x).catch(err => {console.log(err)});
        
        resolve({images,vedios});
    })
}


const getVideos =async (url) => {
    return new Promise(async (resolve,reject)=>{
        try{
            const browser = await puppeteer.launch({headless: false});
            const page = await browser.newPage();
            //await page.goto('https://www.facebook.com/findmeafunnyvideo/');
            //await page.goto('https://www.shutterstock.com/discover/stock-image-0120?kw=image%20site&c3apidt=p15783036933&gclid=CjwKCAiA3L6PBhBvEiwAINlJ9BGyh2PKt9_ECAdrpKzBxNHQRhyshyvdUFL-lJmq2oZhVZ00cVwwUxoC_jQQAvD_BwE&gclsrc=aw.ds');
            await page.setDefaultNavigationTimeout(0);
            await page.goto(url);
            //await page.waitForSelector('video');
            let issueSrcs = await page.evaluate(() => {
              const srcs = Array.from(
                document.querySelectorAll("video > source")
              ).map((v) => v.getAttribute("src"));
                
              return srcs;
            });

            const issueSrcs2 = await page.evaluate(() => {
                const srcs = Array.from(
                  document.querySelectorAll("video")
                ).map((v) => v.getAttribute("src"));
                  
                return srcs;
              });
            console.log(issueSrcs);
          issueSrcs = issueSrcs.concat(issueSrcs2);
          
            await browser.close();
            resolve(issueSrcs);      
    
        }
        catch(err){
            reject(err);

        }

    })

};

const getImages =async (url) => {
    return new Promise(async (resolve,reject)=>{
        try{
            const browser = await puppeteer.launch({headless: false});
            const page = await browser.newPage();
            //await page.goto('https://www.facebook.com/findmeafunnyvideo/');
            //await page.goto('https://www.shutterstock.com/discover/stock-image-0120?kw=image%20site&c3apidt=p15783036933&gclid=CjwKCAiA3L6PBhBvEiwAINlJ9BGyh2PKt9_ECAdrpKzBxNHQRhyshyvdUFL-lJmq2oZhVZ00cVwwUxoC_jQQAvD_BwE&gclsrc=aw.ds');
            await page.setDefaultNavigationTimeout(0);
            await page.goto(url);
            
            //await page.waitForSelector('video');
            const issueSrcs = await page.evaluate(() => {
              const srcs = Array.from(
                document.querySelectorAll("img[src]")
              ).map((v) => v.getAttribute("src"));
                
              return srcs;
            });
            console.log(issueSrcs);
          
          
            await browser.close();
            resolve(issueSrcs);      
    
        }
        catch(err){
            reject(err);

        }

    })

};

  module.exports = app;