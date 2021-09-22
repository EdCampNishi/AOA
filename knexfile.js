// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      user : 'root',
      password : 'p4$$word',
      database : 'db_aoa'
    },
    migrations: {
      tableName : 'knex_migrations',
      directory: `${__dirname}/server/infra/migrations`
    },
    seeds: {
      directory: `${__dirname}/server/infra/seeds`
    }
  }
};
