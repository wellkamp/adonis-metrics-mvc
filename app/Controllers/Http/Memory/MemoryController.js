"use strict";

const MemoryMetric = use("App/Models/MemoryMetric");
const User = use("App/Models/User");
const PersonalComputer = use("App/Models/PersonalComputer");
const moment = use("moment");

class MemoryController {
    async show({ view, params, auth }) {
        try {
            if (params.id == auth.user.id) {
                var currentData = moment().format("YYYY-MM-DD");
                const memoryMetrics = await MemoryMetric.query()
                    .where("pc_id", params.id)
                    .limit(10)
                    .orderBy("id", "desc")
                    .fetch();

                const maxValue = await MemoryMetric.query()
                    .where("pc_id", params.id)
                    .max("used as max")
                    .first();

                const minValue = await MemoryMetric.query()
                    .where("pc_id", params.id)
                    .min("used as min")
                    .first();

                const avg = await MemoryMetric.query()
                    .where("pc_id", params.id)
                    .avg("used as avg")
                    .first();

                const minValuePerDay = await MemoryMetric.query()
                    .where("pc_id", params.id)
                    .where("created_at", ">=", currentData)
                    .min("used as minPerDay")
                    .first();

                const maxValuePerDay = await MemoryMetric.query()
                    .where("pc_id", params.id)
                    .where("created_at", ">=", currentData)
                    .max("used as maxPerDay")
                    .first();

                const avgValuePerDay = await MemoryMetric.query()
                    .where("pc_id", params.id)
                    .where("created_at", ">=", currentData)
                    .avg("used as avgPerDay")
                    .first();

                return !memoryMetrics.rows.length
                    ? view.render("memory.show")
                    : view.render("memory.show", {
                          minValuePerDay,
                          maxValuePerDay,
                          avgValuePerDay,
                          memoryMetrics,
                          maxValue,
                          minValue,
                          avg,
                      });
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = MemoryController;
