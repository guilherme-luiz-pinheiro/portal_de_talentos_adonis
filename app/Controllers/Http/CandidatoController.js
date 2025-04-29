'use strict'

const Candidato = use('App/Models/Candidato')

class CandidatoController {
  async store({ request }) {
    const data = request.only(['nome', 'email', 'telefone'])
    const candidato = await Candidato.create(data)
    return candidato
  }

  async index() {
    const candidatos = await Candidato.all()
    return candidatos
  }
}

module.exports = CandidatoController
