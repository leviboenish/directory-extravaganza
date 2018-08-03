
exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends', (table) =>{
    table.increments('id'),
    table.string('firstName'),
    table.string('lastName'),
    table.string('photo'),
    table.string('hometownLat'),
    table.string('hometownLong'),
    table.string('prevOccupation')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('friends')
};
