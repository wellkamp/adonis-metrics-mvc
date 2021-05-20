"use strict";

const GPUMetrics = use("App/Models/GPUMetric");
const User = use("App/Models/User");
const PersonalComputer = use("App/Models/PersonalComputer");

class GpuController {
    async show({ view, params, auth }) {
        
        try {
            if (params.id == auth.user.id) {
                const gpu_metrics = await GPUMetrics.query()
                    .where("pc_id", params.id)
                    .limit(10)
                    .orderBy("id", "desc")
                    .fetch();

                const max_value = await GPUMetrics.query()
                    .where("pc_id", params.id)
                    .max("gpu_core as max")
                    .first();

                const min_value = await GPUMetrics.query()
                    .where("pc_id", params.id)
                    .min("gpu_core as min")
                    .first();

                const avg = await GPUMetrics.query()
                    .where("pc_id", params.id)
                    .avg("gpu_core as avg")
                    .first()
                
                return !gpu_metrics.rows.length ? view.render("gpu.show") : view.render("gpu.show", {
                          gpu_metrics,
                          max_value,
                          min_value,
                          avg
                      });
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = GpuController;
