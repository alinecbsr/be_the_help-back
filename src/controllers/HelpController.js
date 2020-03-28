const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const help = await connection('help').select('*');

    return response.json(help);
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection('help').insert({
      title,
      description,
      value,
      ong_id
    });

    return response.json({ id });
  }
};