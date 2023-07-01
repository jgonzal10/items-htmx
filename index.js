const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');
const { v1 } = require('uuid');
const compression = require('compression');

const items = require('./data/items');

const itemsRouter = require('./routes/items');

const PORT = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('assets'));
app.use(compression());

app.get('/', (req, res) => {
    res.render('index', { items });
});

app.use('/items', itemsRouter);

app.listen(PORT);

console.log('Listening on port: ', PORT);