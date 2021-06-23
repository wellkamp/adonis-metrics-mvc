"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class GpuMetric extends Model {
    personalComputer() {
        return this.belongsTouse("App/Models/PersonalComputer");
    }
}

module.exports = GpuMetric;
