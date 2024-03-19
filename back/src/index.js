const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/index');
const PORT = 3001;
const {conn} = require("./DB_connection");

const server = express();
server.use(morgan('dev'));
server.use(cors());

// server.use(express.json());
// server.use('/rickandmorty', router);

// server.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// })

conn.sync({force: true}).then(() => {
    server.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });  
});
