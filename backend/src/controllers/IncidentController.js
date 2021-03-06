const connection = require('../database/connection');

module.exports = {
//metodo que faz controlo de todos os incidents
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection('incidents').count();
//esquema de paginação
    const incidents = await connection('incidents')
    .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
    .limit(5)
    .offset((page - 1) * 5)
    .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.village']);

    //contagem dos casos totais
    response.header('X-Total-Count', count['count(*)']);

    return response.json(incidents);
  },


  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;
 
    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,

    });
    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();
//Verificação para bloquear diferentes ongs de apagarem casos que não sejam deles
    if(incident.ong_id !== ong_id) {
      return response.status(401).json({ error: 'Operation not permitted.' });
    }

    await connection('incidents').where('id', id).delete();

    return response.status(204).send();
  }
};