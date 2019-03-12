
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('prisonerSkills').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('prisonerSkills').insert([
        {
          prisoner_id: 1,
          skill_id: 1
        },
        {
          prisoner_id: 1,
          skill_id: 10
        },
        {
          prisoner_id: 1,
          skill_id: 11
        },
        {
          prisoner_id: 1,
          skill_id: 12
        },
        {
          prisoner_id: 2,
          skill_id: 7
        },
        {
          prisoner_id: 2,
          skill_id: 8
        },
        {
          prisoner_id: 2,
          skill_id: 5
        },
        {
          prisoner_id: 2,
          skill_id: 7
        },
        {
          prisoner_id: 2,
          skill_id: 1
        },
        {
          prisoner_id: 2,
          skill_id: 9
        },
        {
          prisoner_id: 2,
          skill_id: 10
        },
        {
          prisoner_id: 2,
          skill_id: 11
        },
        {
          prisoner_id: 2,
          skill_id: 12
        },
        {
          prisoner_id: 3,
          skill_id: 5
        },
        {
          prisoner_id: 3,
          skill_id: 6
        },
        {
          prisoner_id: 4,
          skill_id: 1
        },
        {
          prisoner_id: 4,
          skill_id: 2
        },
        {
          prisoner_id: 4,
          skill_id: 3
        },
        {
          prisoner_id: 4,
          skill_id: 4
        },
        {
          prisoner_id: 4,
          skill_id: 5
        },
        {
          prisoner_id: 4,
          skill_id: 6
        },
      ]);
    });
};
