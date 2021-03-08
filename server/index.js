const express = require("express");
const recipeScraper = require("recipe-scraper");
// const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/', async (req, res, next) => {
  console.log(req.body.url)
  try {
    const recipe = await recipeScraper(req.body.url)
    res.status(200).send(recipe)
  } catch (err) {
    res.status(400).send({message:err.message})
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});