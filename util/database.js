const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://thanhhai1994_2:UaLSZZduHjLYUzSA@cluster0.e3lf0.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client => {
        console.log('Connected succesfully');
        _db = client.db()
        callback(client)
    })
    .catch(err => {
        console.log(err);
        throw err
    })
}

const getDb = () => {
    if(_db) {
        return _db
    }
    throw 'No database found!'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb