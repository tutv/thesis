'use strict';

module.exports.create = function (major) {
	let db = global.db;

	return new Promise(function (resolve, reject) {
		db.collection('teachers')
			.insertMany([major], {})
			.then(
				docs => {
					resolve(docs.ops[0]);
				},
				error => {
					reject(error);
				}
			);
	});
};

module.exports.list = function () {
	let db = global.db;

	return new Promise(function (resolve, reject) {
		db.collection('teachers')
			.find({})
			.toArray()
			.then(
				docs => {
					resolve(docs);
				},
				error => {
					reject(error);
				}
			);
	});
};
