//const mysql = require('mysql');
const mysql = require('mysql2/promise');
require('dotenv').config();

const options = {
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	port: process.env.DB_PORT
};

const connection = async ()=>{return await mysql.createConnection(options);}


const con = async ()=>{return await mysql.createConnection(options)}
const connection2 = con();





// connection.connect(function(err) {
// 	if (err) throw err;
// });

module.exports = {
	connection,
	options,
	connection2
};
