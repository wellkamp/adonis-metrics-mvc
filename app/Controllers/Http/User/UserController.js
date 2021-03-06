"use strict";

const User = use("App/Models/User");
const Database = use("Database");
const Hash = use("Hash");

class UserController {
    index({ view }) {
        return view.render("users.register");
    }

    async store({ auth, request, session, response }) {
        try {
            const userForm = request.only(["email", "password", "username"]);

            await User.create(userForm);

            session.flash({ notification: "User created successfully" });
        } catch (e) {
            return response.redirect("/");
        }

        return response.route("/");
    }
}

module.exports = UserController;
