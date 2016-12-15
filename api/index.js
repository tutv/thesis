'use strict';

require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true}));

let db = require('./db');
let majorCtrl = require('./controllers/majors');
let teacherCtrl = require('./controllers/teachers');

db.then(
	(database) => {
		global.db = database;

		app.get('/majors', majorCtrl.list);
		app.post('/majors/create', majorCtrl.create);
		app.post('/majors/remove', majorCtrl.remove);

		app.get('/teachers', teacherCtrl.list);
		app.post('/teachers/create', teacherCtrl.create);
		app.post('/teachers/remove', teacherCtrl.remove);

		app.get('/', function (req, res, next) {
			res.send('Hello');
		});

		let port = process.env.HOST_PORT || 9876;

		app.listen(port, function () {
			console.log('App listening on port ' + port);
		});
	},
	error => {
		console.error(error);
	}
);
