"use strict";

/*
|--------------------------------------------------------------------------
| MemoryMetricSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const MemoryMetric = use("App/Models/MemoryMetric");

class MemoryMetricSeeder {
    async run() {
        await MemoryMetric.create({
            used: Math.floor(Math.random() * (80 - 30) + 30),
            available: Math.floor(Math.random() * (80 - 30) + 30),
            pc_id: 1,
        }),
            await MemoryMetric.create({
                used: Math.floor(Math.random() * (80 - 30) + 30),
                available: Math.floor(Math.random() * (80 - 30) + 30),
                pc_id: 1,
            }),
            await MemoryMetric.create({
                used: Math.floor(Math.random() * (80 - 30) + 30),
                available: Math.floor(Math.random() * (80 - 30) + 30),
                pc_id: 1,
            }),
            await MemoryMetric.create({
                used: Math.floor(Math.random() * (80 - 30) + 30),
                available: Math.floor(Math.random() * (80 - 30) + 30),
                pc_id: 1,
            });
    }
}

module.exports = MemoryMetricSeeder;
