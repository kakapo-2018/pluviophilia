
exports.up = function(knex, Promise) {
    return knex.schema.createTable('music', (table) => {
        table.increments('id').primary()
        table.string('title')
        table.string('song')
    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('music')
};