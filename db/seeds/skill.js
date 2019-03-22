
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('prisonerSkills').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('prisonerSkills').insert([
        {prisoner_id: 40886, name: 'money laundry'},
        {prisoner_id: 40886, name: 'art of bridery'},
        {prisoner_id: 40886, name: 'bad commit messages'}
      ]);
    });
};
