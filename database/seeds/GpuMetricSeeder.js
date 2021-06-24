"use strict";

/*
|--------------------------------------------------------------------------
| GpuMetricSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const GpuMetric = use("App/Models/GpuMetric");

class GpuMetricSeeder {
    async run() {
        await GpuMetric.create({
            gpu_core: Math.floor(Math.random() * (100 - 30) + 30),
            gpu_memory: Math.floor(Math.random() * (100 - 30) + 30),
            gpu_vrm_core: Math.floor(Math.random() * (100 - 30) + 30),
            gpu_hot_spot: Math.floor(Math.random() * (100 - 30) + 30),
            pc_id: 1,
        }),
            await GpuMetric.create({
                gpu_core: Math.floor(Math.random() * (100 - 30) + 30),
                gpu_memory: Math.floor(Math.random() * (100 - 30) + 30),
                gpu_vrm_core: Math.floor(Math.random() * (100 - 30) + 30),
                gpu_hot_spot: Math.floor(Math.random() * (100 - 30) + 30),
                pc_id: 1,
            }),
            await GpuMetric.create({
                gpu_core: Math.floor(Math.random() * (100 - 30) + 30),
                gpu_memory: Math.floor(Math.random() * (100 - 30) + 30),
                gpu_vrm_core: Math.floor(Math.random() * (100 - 30) + 30),
                gpu_hot_spot: Math.floor(Math.random() * (100 - 30) + 30),
                pc_id: 1,
            }),
            await GpuMetric.create({
                gpu_core: Math.floor(Math.random() * (100 - 30) + 30),
                gpu_memory: Math.floor(Math.random() * (100 - 30) + 30),
                gpu_vrm_core: Math.floor(Math.random() * (100 - 30) + 30),
                gpu_hot_spot: Math.floor(Math.random() * (100 - 30) + 30),
                pc_id: 1,
            });
    }
}

module.exports = GpuMetricSeeder;
