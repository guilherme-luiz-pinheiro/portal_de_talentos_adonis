'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
'use strict'

const Schema = use('Schema')

class CandidatosSchema extends Schema {
  up () {
    this.create('candidatos', (table) => {
      table.increments()
      table.string('nome_completo', 255).notNullable()
      table.date('data_nascimento').notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('telefone', 20).notNullable()
      table.string('cep', 20).notNullable()
      table.string('rua', 255).notNullable()
      table.string('numero', 10).notNullable()
      table.string('bairro', 255).notNullable()
      table.string('cidade', 255).notNullable()
      table.string('estado', 100).notNullable()
      table.string('curso', 255).notNullable()
      table.string('instituicao', 255).notNullable()
      table.date('data_conclusao').notNullable()
      table.json('habilidades').notNullable() // Armazenar habilidades como um array JSON
      table.timestamps()
    })
  }

  down () {
    this.drop('candidatos')
  }
}

module.exports = CandidatosSchema

