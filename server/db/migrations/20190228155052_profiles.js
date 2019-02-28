exports.up = function (knex, Promise) {
  return knex.schema.createTable('profiles', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('cohort_id').references('cohorts.id')
    table.string('profile_picture')
    table.string('location')
    table.string('cv_location')
    table.string('description')
    table.string('github_url')
    table.string('work_statuses_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('profiles')
}