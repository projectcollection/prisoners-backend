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
      - `location`: string
      - 
