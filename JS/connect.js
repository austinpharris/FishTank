let mysql = require('mysql2');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'fishtank'
});

// connection.connect(function(err){
//     if (err){
//         return console.error('error: ' + err.message);
//     }
//     console.log('Connected to MySql Database');
// })

connection.query(
    'SHOW DATABASES;',
    function(err, results, fields){
        console.log(results);
        console.log(fields);
    }
)


