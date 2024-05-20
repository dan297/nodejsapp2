var express = require("express");

var router = express.Router();

var puppeteer = require("puppeteer")

let getQuotes = async () => {
    // Start a Puppeteer session with:
    // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
    // - no default viewport (`defaultViewport: null` - website page will in full width and height)
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });
  
    // Open a new page
    const page = await browser.newPage();
  
    // On this new page:
    // - open the "http://quotes.toscrape.com/" website
    // - wait until the dom content is loaded (HTML is ready)
    await page.goto('https://onlyfans.com/alexiagray', {waitUntil: 'networkidle0'});
    await page.waitForSelector("#content");
  
    // Get page data
    const quotes = await page.evaluate(() => {
      // Fetch the first element with class "quote"
      const quote = document.querySelector(".b-offer-join");
  
      // Fetch the sub-elements from the previously fetched quote element
      // Get the displayed text and return it (`.innerText`)
      const text = quote.querySelector(".b-btn-text__small").innerText;
  
      return { text };
    });
  
    await browser.close();
    return quotes.text;
  };
  
      router.get("/", function(req,res){
        getQuotes().then((result) =>{
        res.render("index", { prices : result }
      )
        });
      })
    

module.exports = router;
