exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.integer('spotifyId');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
