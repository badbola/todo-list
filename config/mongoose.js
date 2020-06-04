const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/todolist');

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'Error in connection to db'));

db.once('open', function(){
    console.log('Successfully connected to database');
});