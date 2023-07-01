const express = require('express');
const pug = require('pug');
const items = require('../data/items');

const itemsRouter = express.Router();

itemsRouter.get('/add', (req, res) => {
    const template = pug.compileFile('views/_add-item.pug');
    const markup = template({  });
    res.send(markup);
});

itemsRouter.post('/', (req,res) => {
    const { name } = req.body;
    const newList = {
        name,
        id: items.length + 1,
        cards: []
    };
    items.push(newList);
    const template = pug.compileFile('views/_board.pug');
    const markup = template({ items } );
    res.send(markup);

});

itemsRouter.get('/cancel', (req,res) => {
    const template = pug.compileFile('views/_new-item.pug');
    const markup = template({  } );
    res.send(markup);
});

module.exports = itemsRouter;