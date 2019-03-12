
exports.up = function(knex, Promise) {
    return knex.schema.createTable('skills', tbl => {
        tbl.increments();

        tbl
            .string('name')
            .notNullable()
            .unique('uq_sill_name');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('skills');
};
