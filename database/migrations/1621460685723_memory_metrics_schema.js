'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MemoryMetricsSchema extends Schema {
  up () {
    this.create('memory_metrics', (table) => {
      table.increments()
      table.float('used').notNullable();
      table.float('available').notNullable();
      table.integer("pc_id").unsigned().index();
      table.timestamps()
    })
  }

  down () {
    this.drop('memory_metrics')
  }
}

module.exports = MemoryMetricsSchema
