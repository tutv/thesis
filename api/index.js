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

db.then(
	(database) => {
		global.db = database;

		let port = process.env.HOST_PORT || 3000;

		app.listen(port, function () {
			console.log('App listening on port ' + port);
		});
	},
	error => {
		console.error(error);
	}
);
