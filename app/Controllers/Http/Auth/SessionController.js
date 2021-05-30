"use strict";

const User = use("App/Models/User");
const Database = use("Database");
const Hash = use("Hash");

class LoginController {
    index({ view }) {
        return view.render("users.login");
    }

    async login({ request, auth, session, response }) {
        const { email, password, remember } = request.all();

        const user = await User.query().where("email", email).first();

        if (user) {
            const passwordVerified = await Hash.verify(password, user.password);
            if (passwordVerified) {
                await auth.attempt(email, password);

                return response.redirect("/");
            }
        }
        session.flash({
            notification: {
                type: "danger",
                message:
                    "Estas credenciais não correspondem aos nossos registros.",
            },
        });

        return response.redirect("back");
    }

    async logout({ auth, response, session }) {
        await auth.logout();
        session.flash({ notification: "Logged out successfully" });

        return response.redirect("/");
    }
}

module.exports = LoginController;
