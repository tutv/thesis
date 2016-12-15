'use strict';

const MongoClient = require('mongodb').MongoClient;

module.exports = new Promise(function (resolve, reject) {
    let url = process.env.DATABASE || false;
    MongoClient.connect(url)
        .then(
            db => {
                resolve(db);
            },
            error => {
                reject(error);
            }

        );
});

