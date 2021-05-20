'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    await User.truncate()
    await User.create({
      username: "wellkamp",
      email: "wellkamp@gmail.com",
      password: "123456789"
    })
  }
}

module.exports = UserSeeder
