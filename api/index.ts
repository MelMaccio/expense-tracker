const server = require('./src/app');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT;

server.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});