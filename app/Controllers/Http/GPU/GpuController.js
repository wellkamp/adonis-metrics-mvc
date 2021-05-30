"use strict";

const GPUMetrics = use("App/Models/GPUMetric");
const User = use("App/Models/User");
const PersonalComputer = use("App/Models/PersonalComputer");
const moment = use("moment");

class GpuController {
    async show({ view, params, auth }) {
        try {
            if (params.id == auth.user.id) {
                var currentData = moment().format("YYYY-MM-DD");
                var lastDays = moment()
                    .subtract(11, "days")
                    .format("YYYY-MM-DD");

                const gpuMetrics = await GPUMetrics.query()
                    .where("pc_id", params.id)
                    .limit(10)
                    .orderBy("id", "desc")
                    .fetch();

                const maxValue = await GPUMetrics.query()
                    .where("pc_id", params.id)
                    .max("gpu_core as max")
                    .first();

                const minValue = await GPUMetrics.query()
                    .where("pc_id", params.id)
                    .min("gpu_core as min")
                    .first();

                const avg = await GPUMetrics.query()
                    .where("pc_id", params.id)
                    .avg("gpu_core as avg")
                    .first();

                const minValuePerDay = await GPUMetrics.query()
                    .where("pc_id", params.id)
                    .where("created_at", ">=", currentData)
                    .min("gpu_core as minPerDay")
                    .first();

                const maxValuePerDay = await GPUMetrics.query()
                    .where("pc_id", params.id)
                    .where("created_at", ">=", currentData)
                    .max("gpu_core as maxPerDay")
                    .first();

                const avgValuePerDay = await GPUMetrics.query()
                    .where("pc_id", params.id)
                    .where("created_at", ">=", currentData)
                    .avg("gpu_core as avgPerDay")
                    .first();

                const personalComputer = await PersonalComputer.query()
                    .where("user_id", params.id)
                    .first();

                let gpu_arr = [];
                let hour_at_arr = [];
                await GPUMetrics.query()
                    .where("pc_id", params.id)
                    .limit(20)
                    .orderBy("id", "desc")
                    .fetch()
                    .then((e) => {
                        for (let i = 0; i < e.rows.length; i++) {
                            gpu_arr.push(e.rows[i].gpu_core);
                            hour_at_arr.push(
                                e.rows[i].created_at.toLocaleString()
                            );
                        }
                        hour_at_arr = JSON.stringify(hour_at_arr.reverse());
                        gpu_arr = JSON.stringify(gpu_arr.reverse());
                    });

                let gpuCoreFifty = [];
                let hourAtFifty = [];
                await GPUMetrics.query()
                    .where("pc_id", params.id)
                    .where("gpu_core", ">=", 50)
                    .whereBetween("created_at", [lastDays, currentData])
                    .orderBy("id", "desc")
                    .limit(20)
                    .fetch()
                    .then((e) => {
                        for (let i = 0; i < e.rows.length; i++) {
                            gpuCoreFifty.push(e.rows[i].gpu_core);
                            hourAtFifty.push(
                                e.rows[i].created_at.toLocaleString()
                            );
                        }
                        hourAtFifty = JSON.stringify(hourAtFifty.reverse());
                        gpuCoreFifty = JSON.stringify(gpuCoreFifty.reverse());
                    });

                return !gpuMetrics.rows.length
                    ? view.render("gpu.show")
                    : view.render("gpu.show", {
                          gpuMetrics,
                          maxValue,
                          minValue,
                          avg,
                          gpu_arr,
                          hour_at_arr,
                          personalComputer,
                          gpuCoreFifty,
                          hourAtFifty,
                          maxValuePerDay,
                          minValuePerDay,
                          avgValuePerDay,
                      });
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = GpuController;
