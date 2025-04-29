const Model = use('Model');

class User extends Model {
  static get hidden () {
    return ['senha'];  // Não exibir a senha no retorno
  }
}

module.exports = User;
