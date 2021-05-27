'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GpuMetricsSchema extends Schema {
  up () {
    this.table('gpu_metrics', (table) => {
      // alter table
      table.float("gpu_core", 12, 2).notNullable().alter();
      table.float("gpu_memory", 12, 2).notNullable().alter();
      table.float("gpu_vrm_core", 12, 2).notNullable().alter();
      table.float("gpu_hot_spot", 12, 2).notNullable().alter();
    })
  }

  down () {
    this.table('gpu_metrics', (table) => {
      // reverse alternations
      table.float("gpu_core").notNullable();
      table.float("gpu_memory").notNullable();
      table.float("gpu_vrm_core").notNullable();
      table.float("gpu_hot_spot").notNullable();
      table.integer("pc_id").unsigned().index();
    })
  }
}

module.exports = GpuMetricsSchema
