const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    student: 'Aline rosa',
    name: 'Aline'
  });
});

module.exports = routes;