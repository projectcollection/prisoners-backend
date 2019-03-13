require('dotenv').config();

// Declarations
const server = require('./server/server');
const port = process.env.PORT || 5000

// Listener
server.listen(process.env.PORT || 5000
, () => console.log(`Server listening on port ${port}`));
