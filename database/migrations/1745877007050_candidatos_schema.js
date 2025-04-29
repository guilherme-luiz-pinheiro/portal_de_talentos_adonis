'use strict'

const Schema = use('Schema')

class CandidatosSchema extends Schema {
  up () {
    this.create('candidatos', (table) => {
      table.increments()
      table.string('nome', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('telefone', 20)
      table.timestamps()
    })
  }

  down () {
    this.drop('candidatos')
  }
}

module.exports = CandidatosSchema
