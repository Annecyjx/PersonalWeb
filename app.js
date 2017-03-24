// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('postgres://' + 
// 	process.env.POSTGRES_USER + ':' + 
// 	process.env.POSTGRES_PASSWORD + '@localhost/personalproject'); 
const express = require('express');
const app = express();
const fs = require('fs');
// const pg = require('pg');
// const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const bcrypt = require('bcrypt');
// const math = require('mathjs')

// app.use(bodyParser.urlencoded({extended: true}));  
// app.use(bodyParser.json());
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('static'));
app.use(express.static('static/js'));
//app.use(cookieParser())

// setting up the session
// app.use(session({
// 	secret: 'cool website to gether neighbours together',
// 	resave: true,
// 	saveUninitialized: false
// }));


//Route
app.get('/home', (req, res) => {
	res.render('index')
})



app.listen(3000, function () {
			console.log('Server has started')
})
