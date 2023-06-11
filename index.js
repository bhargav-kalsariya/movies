const express = require('express');
const app = express();
const connect = require('./config/connect');
connect();
app.use(express.json());
const movies = require('./models/schema');
app.get('/', async (req, res) => {
    let moviesdataget = await movies.find();
    res.send(moviesdataget);
})
app.post('/api', async (req, res) => {
    let movie = await movies.create(req.body)
    console.log(movie);
    res.send(movie);
});
app.listen(5000, () => {
    console.log('Example app listening on port 5000!');
});