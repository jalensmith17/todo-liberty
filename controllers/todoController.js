const Todo = require("../models/todo")

exports.index = async function index(req, res) {
  //grab all todos
  try {
    const todos = await Todo.find({})
    res.status(200).json(todos)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

exports.create = async function create(req, res) {
  // make a todo
  try {
    const todo = await Todo.create(req.body)
  } catch (error) {}
}

exports.update = async function update(req, res) {
  //update a todo already made
  try {
    const updatedTodo = await Todo.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true } )
    res.status(200).json(updatedTodo)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

exports.destroy = async function destroy(req, res) {
  // delete an existing todo
  try {
    await Todo.findOneAndDelete({ _id: req.params.id })

    res.status(204).json({ msg: `The todo with the Id of ${req.params.id} was deleted from the MongoDB database, no further action necessary`})
  } catch (error) {}
}

exports.show = async function show(req, res) {
  // show a single todo
  try {
    const foundTodo = await Todo.findOne({ _id: req.params.id })
    res.status(200).json(Todo)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}
