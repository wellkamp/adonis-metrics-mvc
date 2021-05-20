"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", "IndexController.index").namespace("Index").as("index");

Route.group(() => {
    // Session Login
    Route.get("/login", "SessionController.index")
        .namespace("Auth")
        .as("users.index");
    Route.post("/login", "SessionController.login")
        .namespace("Auth")
        .as("users.login");
}).middleware(["guest"]);

Route.group(() => {
    Route.get("/pc/:id", "PComputerController.show")
        .namespace("PC")
        .as("pc.show");

    // Session Logout And Register
    Route.get("/logout", "SessionController.logout")
        .namespace("Auth")
        .as("users.logout");

    Route.get("/register", "UserController.index")
        .namespace("User")
        .as("users.register");
    Route.post("/register", "UserController.store")
        .namespace("User")
        .as("users.register");
}).middleware(["auth"]);
