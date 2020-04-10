const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//durante desenvolvimento, em produção fica: cors({ origin: 'http://frontend..'})
app.use(cors());

//converter o corpo da requisição de json para objeto JS
app.use(express.json());
app.use(routes);


app.listen(3333);