const express = require('express');

const OngController = require('./controllers/OngController');
const HelpController = require('./controllers/HelpController');


const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/help', HelpController.index);
routes.post('/help', HelpController.create);
routes.delete('/help/:id', HelpController.delete);


module.exports = routes;
