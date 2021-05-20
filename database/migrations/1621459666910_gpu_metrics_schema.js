"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class GpuMetricsSchema extends Schema {
    up() {
        this.create("gpu_metrics", (table) => {
            table.increments();
            table.float("gpu_core").notNullable();
            table.float("gpu_memory").notNullable();
            table.float("gpu_vrm_core").notNullable();
            table.float("gpu_hot_spot").notNullable();
            table.integer("pc_id").unsigned().index();
            table.timestamps();
        });
    }

    down() {
        this.drop("gpu_metrics");
    }
}

module.exports = GpuMetricsSchema;