const express       = require('express')
const app           = express();
const path          = require('path');
const session       = require('express-session');
const MySQLStore    = require('express-mysql-session')(session);
const Router        = require('./Router');
require('dotenv').config()

app.use(express.static(path.join(__dirname,'dist')));
app.use(express.json());
app.use(express.static('public'))


const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

new Router(app,pool);

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'dist','index.html'));

});
const PORT =process.env.PORT || 3000;
console.log("Server started");
app.listen(PORT);


