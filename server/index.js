const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json')
const recipes = require('./data/recipes.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running')
});

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedRecipes = chefs.find(r => r.id == id);
    res.send(selectedRecipes);
})

app.get('/recipes', (req, res) => {
    res.send(recipes)
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const selectedRecipes = recipes.find(r => r.id == id);
    res.send(selectedRecipes);
})

app.listen(port, () => {
    console.log(`Chef API is running on port: ${port}`)
})