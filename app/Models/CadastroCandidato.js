const Model = use('Model');

class CadastroCandidato extends Model {
  static get table() {
    return 'candidatos'; // Defina o nome da sua tabela
  }

  static get primaryKey() {
    return 'id'; // Defina a chave primária
  }
}

module.exports = CadastroCandidato;
