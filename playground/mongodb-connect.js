const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to mongodb server'); 
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         console.log('unable to insert Todo ', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection('Users').insertOne({
        name: 'Mo',
        age: 99,
        location: 'UK'
    }, (err, result) => {
        if (err) {
            console.log('unable to insert Todo ', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    db.close();
});