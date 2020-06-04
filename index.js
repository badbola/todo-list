const express = require('express');
const app = express();
const port = 8000;
const expressLayout = require('express-ejs-layouts');

const db = require('./config/mongoose');
const Todo = require('./models/contact');

app.use(express.static('./assets'));
app.use(expressLayout);




app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());



app.use('/', require('./routes/index'));

// app.post('/create-task', function(req,res){
//     //todolist.push(req.body);
    
//     return res.redirect('/');
// });
// app.get('/delete-task', function(req,res){
//     let task = req.query.task;

//     let listIndex = todolist.findIndex(todo => todo.task==task);

//     if(listIndex != -1){
//         todolist.splice(listIndex, 1);
//     }

//     return res.redirect('back');
// });

app.listen(port,function(err){
    if(err){console.log(`Error in port ${port}, Type of error is ${err}`); return; }

    console.log(`Running fine on port: ${port}`);
})