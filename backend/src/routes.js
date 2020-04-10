const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

//rota de login
routes.post('/sessions', SessionController.create);

//Listagem de Ongs
routes.get('/ongs', OngController.index); 
//Cadastro de Ongs(de maneira desestruturada, ou abstração da lógica) para pasta Controllers
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;