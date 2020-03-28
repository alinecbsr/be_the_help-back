const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;

    const help = await connection('help')
      .where('ong_id', ong_id)
      .select('*');

    return response.json(help);
  }
};
