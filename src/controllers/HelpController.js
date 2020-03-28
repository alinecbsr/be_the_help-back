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
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const help = await connection('help')
      .where('id', id)
      .select('ong_id')
      .first();

    if (help.ong_id !== ong_id) {
      return response.status(401).json({ error: 'Operation not permitted.' });
    }

    await connection('help').where('id', id).delete();

    return response.status(204).send();
  }
};
