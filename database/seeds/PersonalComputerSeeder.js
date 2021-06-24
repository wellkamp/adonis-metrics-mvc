"use strict";

/*
|--------------------------------------------------------------------------
| PersonalComputerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const PersonalComputer = use("App/Models/PersonalComputer");

class PersonalComputerSeeder {
    async run() {
        await PersonalComputer.truncate();
        await PersonalComputer.create({
            mainboard: "PLACA MÃE",
            gpu: "GPU",
            processador: "PROCESSADOR",
            memory: "MEMÓRIA",
            user_id: 1,
        });
    }
}

module.exports = PersonalComputerSeeder;
