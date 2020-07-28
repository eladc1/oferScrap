const fs = require('fs');
const links = require('./links.json');
links.length = 3;
const results = [];

const puppeteer = require('puppeteer');
(async () => {
    console.log("Start!!!");
    const giveMeYourData = async urlIndex => {
        const url = links[urlIndex];
        const page = await browser.newPage();
        await page.goto(url);
        console.log('entering: ', url);

        await page.waitForSelector('.HPsection > .cardDetails > .contactDiv > .contact-right > .email');

        const result = await page.evaluate( () => {
            const mailElem = document.querySelector('.email');
            const mail = mailElem ? mailElem.textContent : mail;
            const nameElem = document.querySelector('.cardDetailsTop');
            const name = nameElem ? nameElem.textContent.trim() : nameElem;    
            return [{ mail, name }];
        });

        await page.close();
        console.log('Got result: ', result);

        if(urlIndex < links.length -1 ) {
            return result.concat( await giveMeYourData( urlIndex + 1));
        } else {
            return result;
        }
    }

    const browser = await puppeteer.launch();
    const results = await giveMeYourData(0);

    console.log('Hope for good..');

    await browser.close();

    console.log(results);
    fs.writeFileSync('result.json', JSON.stringify(results), 'utf8')
    console.log('Aaannnnnd- we done');
})()
