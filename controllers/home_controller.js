//const express = require('express');
//const app = express();
const Todo = require('../models/contact');
var todolist = [
    {
        task: 'create a list',
        category: 'personal'
    },
    {
        task: 'create the layout',
        category: 'public'
    }
]

module.exports.home =function(req,res){
    Todo.find({},function(err,Task){
        if(err){console.log('Cannot show list'); return;}
        return res.render('home',{
            title: 'To-do List',
            todo_list: Task
        })
    })
};

// app.get('/delete-task/:category', function(req,res){
//     console.log(req.params);
//     let category = req.params.category;
// });

module.exports.create = function(req,res){
    //todolist.push(req.body);
    Todo.create({
        task: req.body.task,
        category: req.body.category
    },function(err, newTask){
        if(err){console.log("Task cannot be created"); return;}

        console.log('***********', newTask);
        return res.redirect('back');
    });
    
};
module.exports.deleteTask = function(req,res){
    let task = req.query.task;

    Todo.findOneAndDelete(task, function(err){
        if(err){console.log(`Cannot delete contact ${err}`); return;}
        return res.redirect('back');
    });
};
module.exports.deleteCategory = function(req,res){
    let categ = req.query.category;

    
    Todo.deleteMany({category: categ}, function(err){
        if(err){console.log(`Cannot delete contact ${err}`); return;}
        return res.redirect('back');
    })

}
module.exports.deleteall = function(req,res){
    let categ = req.body.category;

    
    Todo.deleteMany({category: categ}, function(err){
        if(err){console.log(`Cannot delete contact ${err}`); return;}
        return res.redirect('back');
    })

}