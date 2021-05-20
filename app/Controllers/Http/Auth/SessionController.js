"use strict";

const User = use("App/Models/User");
const Database = use("Database");

class LoginController {
    index({ view }) {
        return view.render("users.login");
    }

    async login({ request, auth, session, response }) {
        const { email, password, remember } = request.all();

        const user = await auth.attempt(email, password);
        console.log(auth.user.id);
        if (user) {
            session.flash({ notification: "Logged in successfully" });
            return response.redirect("/");
        }

        return response.redirect("/login");
    }

    async logout({ auth, response, session }) {
        await auth.logout();
        session.flash({ notification: "Logged out successfully" });

        return response.redirect("/");
    }
}

module.exports = LoginController;
