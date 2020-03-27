const express = require('express');

const app = express();

app.use(express.json());

app.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    student: 'Aline rosa',
    name: 'Aline'
  });
});

app.listen(3333);
