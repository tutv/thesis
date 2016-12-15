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
