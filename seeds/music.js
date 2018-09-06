
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('music').del()
    .then(function () {
      // Inserts seed entries
      return knex('music').insert([
        {id: 1, title: 'Enter Sandman', song: 'A B C D E'},
        {id: 2, title: 'We are the champions', song: 'D E A G'},
        {id: 3, title: 'Smells like teen spirit', song: 'D W A D I'}
      ]);
    });
};
