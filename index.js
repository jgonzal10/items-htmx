const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');
const { v1 } = require('uuid');
const compression = require('compression');

const lists = require('./data/items');

const todosRouter = require('./routes/items');

const PORT = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('assets'));
app.use(compression());

app.get('/', (req, res) => {
    res.render('index', { lists });
});

app.use('/todos', todosRouter);

app.listen(PORT);

console.log('Listening on port: ', PORT);