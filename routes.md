Routes thus Far

## Authentication

- *POST* `/api/auth/register` 
  - Input: 
    - Object of new Prison info
      - `location`: string, required, unique
      - `population`: integer, required
      - `password`: string, required, 12 characters or more
      - `zipcode`: integer
  - Output:
    - JSON of New Prison object
      - `ID`: auto incremented
      - `location`: string
      - `population`: integer
      - `zipcode`: integer, if provided
      - `prisoners`: array, if provided


- *POST* `/api/auth/login`
  - input:
    - object of credentials
      - `location`: string, required
      - `password`: string, required
  - output:
    - `token`: JWT for Authentication


## Prisons
- *GET* `/api/prisons/`
  - returns all prisons in DB or empty array if none exist

- *GET* `/api/prisons/:id`
  - returns specified prison

- *GET* `/api/prisons/:id/prisoners`
  - returns all prisoners associated with prison
  - returns error if prison does no exist or no prisoners are associated with it

- *PUT* `/api/prisons/:id`
  - does NOT require the full prison object to be submitted
  - hashes the new password if one is provided

- *DELETE* `/api/prisons/:id`
  - deletes prison with matching `id` from db


## Prisoners
- *GET* `/api/prisoners/`
  - returns array with prisoner objects including:
    - `id`: integer
    - `name`: string
    - `id_number`: integer
    - `prison_id`: integer
    - `location`: string (from prisons table)