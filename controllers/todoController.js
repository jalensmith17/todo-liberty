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
  } catch (error) {}
}

exports.update = async function update(req, res) {
  //update a todo already made
  try {
  } catch (error) {}
}

exports.destroy = async function destroy(req, res) {
  // delete an existing todo
  try {
  } catch (error) {}
}

exports.show = async function show(req, res) {
  // show a single todo
  try {
  } catch (error) {}
}
