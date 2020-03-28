const express = require('express');

const OngController = require('./controllers/OngController');
const HelpController = require('./controllers/HelpController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/help', HelpController.index);
routes.post('/help', HelpController.create);
routes.delete('/help/:id', HelpController.delete);

module.exports = routes;
