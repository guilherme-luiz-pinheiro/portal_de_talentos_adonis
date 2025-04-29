const { validate } = use('Validator');
const User = use('App/Models/User');
const Hash = use('Hash');

class AuthController {
  // Método para registrar um novo usuário
  async register({ request, response }) {
    console.log('Requisição de registro recebida');
    const { email, senha } = request.all();
  
    const validation = await validate(request.all(), {
      email: 'required|email',
      senha: 'required|min:6',
    });
  
    if (validation.fails()) {
      console.log('Validação falhou');
      return response.status(400).json({ message: 'Dados inválidos', errors: validation.messages() });
    }
  
    const userExists = await User.findBy('email', email);
    if (userExists) {
      console.log('Usuário já existe');
      return response.status(400).json({ message: 'Este e-mail já está cadastrado.' });
    }
  
    try {
      const user = await User.create({
        email,
        senha: await Hash.make(senha),
      });
      console.log('Usuário criado com sucesso');
      return response.status(201).json({ message: 'Usuário criado com sucesso', user: { email: user.email, id: user.id } });
    } catch (err) {
      console.error('Erro ao criar o usuário:', err);
      return response.status(500).json({ message: 'Erro interno ao criar o usuário.' });
    }
  }
  
}

module.exports = AuthController;
