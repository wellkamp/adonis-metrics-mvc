"use strict";

const PersonalComputer = use("App/Models/PersonalComputer");
const User = use("App/Models/User");
const Database = use("Database");

class PComputerController {
    async show({ view, params, auth }) {
        try {
            if (params.id == auth.user.id) {
                const computers = await PersonalComputer.query()
                    .where("user_id", params.id)
                    .fetch();

                return !computers.rows.length
                    ? view.render("pc.show")
                    : view.render("pc.show", { computers });
            }
        } catch (error) {
            console.log(error);
        }
    }

    async store({ auth, request, session, response }) {
        try {
            let pcForm = request.only([
                "mainboard",
                "processador",
                "gpu",
                "memory",
            ]);
            pcForm["user_id"] = auth.user.id;
            console.log(pcForm);
            await PersonalComputer.create(pcForm);
            session.flash({ notification: "PC created successfully" });
        } catch (e) {
            return response.redirect("/");
        }

        return response.route("/");
    }
}

module.exports = PComputerController;
