import { Todo } from "../models/todo.model.js";

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    if (!todos) {
      return res.status(200).json({ null: "there is no todo to fetch" });
    }

    return res
      .status(200)
      .json({ msg: "fetch the todos successfully", data: todos });
  } catch (error) {
    console.log("error on fetching the todos", error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching todos" });
  }
};

const addTodo = async (req, res) => {
  const {content} = req.body;
  try {
    if (!content) {
      return res.status(400).json({ error: "Content cannot be empty" });
    }
    const todo = await Todo.create({
      content
    });

    return res.status(201).json({
      msg: "Todo added successfully",
      data: todo,
    });
  } catch (error) {
    console.log("error on adding todo", error);
    return res
      .status(500)
      .json({ error: "An error occurred while adding the todo" });
  }
};

const updateTodo = async (req, res) => {
  const content = req.body.content;
  const { _id } = req.params;
  if (!content) {
    return res.status(400).json({ error: "Content cannot be empty" });
  }

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      _id,
      { $set: { content: content } },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    return res
      .status(200)
      .json({ msg: "Data was successfully updated", data: updatedTodo });
  } catch (error) {
    console.log("Error updating the todo:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while updating the todo" });
  }
};

const deleteTodo = async (req, res) => {
  const { _id } = req.params;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(_id);
    if (!deletedTodo) {
      return res
      .status(404)
      .json({ error: "not found todo" });
    }
    return res.status(200).json({ msg: "Todo successfully deleted", data: deletedTodo });
  } catch (error) {
    console.log("error on deleting todo", error);
    return res
      .status(500)
      .json({ error: "An error occurred while deleting the todo" });
  }
};

export { getAllTodos, addTodo, updateTodo, deleteTodo };
