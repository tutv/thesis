'use strict';

let ObjectID = require('mongodb').ObjectID;

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

module.exports.remove = function (id) {
	let db = global.db;

	return new Promise(function (resolve, reject) {
		db.collection('teachers')
			.removeOne({_id: ObjectID(id)})
			.then(
				number => {
					resolve(number);
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
