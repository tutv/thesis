'use strict';

let majorModel = require('../model/majors');


module.exports.list = (req, res, next) => {
	majorModel.list()
		.then(
			docs => {
				res.json(docs);
			},
			error => {
				res.status(500).send('Error');
			}
		)
};

module.exports.create = (req, res, next) => {
	let major = req.body;

	majorModel.create(major)
		.then(
			newMajor => {
				res.json(newMajor);
			},
			error => {
				res.status(500).send('Error');
			}
		)
};
