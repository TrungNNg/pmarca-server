const express = require('express');
const Todo = require('../models/Todo')
const { model } = require('mongoose');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find(); 
        res.json(todos)
    } catch (error) {
        res.json({message: error})
    }
})

router.post('/', (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        desc: req.body.desc,
    })
    todo.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json({message: err})
    })
})

router.delete('/:todoId', async (req, res) => {
    try {
        const deleteTodo = await Todo.findByIdAndDelete({_id:req.params.todoId});
        res.json(deleteTodo);
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router;