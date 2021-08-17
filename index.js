const { Client } = require('pg'); // This is equal to : const client = require('pg').Client
const client = new Client({
    user: "postgres",
    password: "2212000",
    host: "localhost",
    port: 5432,
    database: "postgres"
})

client.connect()
.then(() => console.log("Connected successfully"))
.then(() => client.query(" select * from students ")) // You can put your query over here
.then(results => console.table(results.rows) )
// INSERT INTO students (name, id, age) VALUES ('Ahmed', 5 , 122) 

.catch(err => console.log(err))
.finally(() => client.end()) // It is very important to end the connection ||||| finally will always works
