'use strict';

let teacherModel = require('../model/teachers');


module.exports.list = (req, res, next) => {
	teacherModel.list()
		.then(
			teachers => {
				res.json(teachers);
			},
			error => {
				res.status(500).send('Error');
			}
		)
};

module.exports.create = (req, res, next) => {
	let teacher = req.body;

	teacherModel.create(teacher)
		.then(
			newTeacher => {
				res.json(newTeacher);
			},
			error => {
				res.status(500).send('Error');
			}
		)
};
