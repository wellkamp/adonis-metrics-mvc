"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PersonalComputersSchema extends Schema {
    up() {
        this.create("personal_computers", (table) => {
            table.increments();
            table.string("mainboard").notNullable();
            table.string("gpu").notNullable();
            table.string("processador").notNullable();
            table.string("memory").notNullable();
            table.integer("user_id").unsigned().index();
            table.timestamps();
        });
    }

    down() {
        this.drop("personal_computers");
    }
}

module.exports = PersonalComputersSchema;
