const CadastroCandidato = use('App/Models/CadastroCandidato'); // Importa o Model para Candidato

class CadastroCandidatoController {
  async store({ request, response }) {
    const data = request.only([
      'nome_completo',
      'data_nascimento',
      'email',
      'telefone',
      'cep',
      'rua',
      'numero',
      'bairro',
      'cidade',
      'estado',
      'curso',
      'instituicao',
      'data_conclusao',
      'habilidades',
    ]);

    try {
      const candidato = await CadastroCandidato.create(data); // Cria um novo cadastro de candidato
      return response.status(201).json(candidato);
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao cadastrar candidato' });
    }
  }
}

module.exports = CadastroCandidatoController;
