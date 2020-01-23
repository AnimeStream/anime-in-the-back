exports.up = function (knex) {
  return knex.schema.createTable('genres', tbl => {
    tbl.increments('id').primary();
    tbl.integer("video_id").unsigned();
    tbl.text('name', 128).notNullable();
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
    tbl.timestamp('updated_at').defaultTo(knex.fn.now());

    tbl.foreign("video_id").references("videos.id")
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
};


exports.down = function (knex) {
  return knex.schema.dropTableIfExists('genres');
};