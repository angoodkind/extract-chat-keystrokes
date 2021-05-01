const { connect, connection } = require('mongoose');
const { config } = require('dotenv'); 

/*const {___} = require(<package>) is called Destructuring. 
This makes our code a lot more cleaner.
*/

/*We'll use module.exports since we want to import this file in our server.js*/

module.exports = () => {
 config(); //invoking the dotenv config here
 const uri = process.env.DB_URI;

 connect(uri, {
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
        .then(() => {
            console.log('Connection estabislished with MongoDB');
        })
        .catch(error => console.error(error.message));
}