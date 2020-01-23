
const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      const salt = bcrypt.genSaltSync(10);
      ;
      return knex('users').insert([
        {
          first_name: "testy",
          last_name: "million",
          email: "test@gmail.com",
          password: bcrypt.hashSync("test", salt)
        },
      ]);
    });
};