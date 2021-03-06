const express    = require('express');
const app        = express();
const Pokemon    = require('./models/pokemon.js');

// INDEX
app.get('/', (req, res) => {
	res.render('index.ejs', { data: Pokemon });
});

// SHOW
app.get('/:id', (req, res) => {
    res.render('show.ejs', { 
    	data: Pokemon[req.params.id] 
    });
});

app.listen(3000, () => {
	console.log('...');
});