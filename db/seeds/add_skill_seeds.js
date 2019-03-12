exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        // 1
        {
          name: 'Business Management'
        },
        // 2
        {
          name: 'Driving'
        },
        // 3
        {
          name: 'Networking'
        },
        // 4
        {
          name: 'Research and Development'
        },
        // 5
        {
          name: 'Self-Starter'
        },
        // 6
        {
          name: 'Detail-Oriented'
        },
        // 7
        {
          name: 'Money Management'
        },
        // 8
        {
          name: 'Risk Taking'
        },
        // 9
        {
          name: 'Clinical Medication Management'
        },
        // 10
        {
          name: 'Distribution'
        },
        // 11
        {
          name: 'Sales'
        },
        // 12
        {
          name: 'Persuasion'
        }
      ]);
    });
};
