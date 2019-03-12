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
      - `location`
      - `population`
      - `zipcode` if provided


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