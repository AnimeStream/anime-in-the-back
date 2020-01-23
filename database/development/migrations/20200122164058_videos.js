exports.up = function (knex) {
  return knex.schema.createTable('videos', tbl => {
    tbl.increments('id').primary();
    tbl.integer("user_id").unsigned();
    tbl.integer("genre_id").unsigned();
    tbl.text('animeTitle', 128).notNullable();
    tbl.integer('seasons').defaultTo(null);
    tbl.float('episode_list').notNullable();
    tbl.text('server', 128).defaultTo(null);
    tbl.text('embeded_link', 128).notNullable();
    tbl.text('language_type', 128).defaultTo(null);
    tbl.integer('votes', 128).defaultTo(null);
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
    tbl.timestamp('updated_at').defaultTo(knex.fn.now());

   tbl.foreign("user_id").references("users.id")
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.foreign("genre_id").references("genres.id")
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
};


exports.down = function (knex) {
  return knex.schema.dropTableIfExists('videos');
};