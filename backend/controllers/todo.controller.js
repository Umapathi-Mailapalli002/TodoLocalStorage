import { Todo } from "../models/todo.model.js";

const getAllTodos = async(req, res) => {
  try {
    const todos = await Todo.find({});
    if (todos === null) {
      console.log("there is no todo in the database")
    }

    return res
    .status(200)
    .json({msg: "fetch the todos successfully", data: todos})
  } catch (error) {
    console.log("error on fetching the todos", error)
  }
}

const addTodo = async (req, res) => {
  const content = req.body.content;
  try {

    if (!content) {
      throw new Error("content can't be empty")
    }
    const todo = await Todo.create({
      content: content,
    });
  
    return res.status(201).json({
      msg: "Todo added successfully",
      data: todo,
    });
  } catch (error) {
    console.log("error on adding todo", error)
  }
};

const updateTodo = async (req, res) => {
  try {
    const updateTodo =  await Todo.findByIdAndUpdate(
      _id,
      {
        $set: {
          content,
        },
      },
      {
        new: true,
      }
    );
  
    if (!updateTodo) {
      console.log("cannot find the id of the todo")
    }
    return res
    .status(200)
    .json({msg: "data was successfully updated", data: updateTodo})
  } catch (error) {
    console.log("error on updating the todo", error)
  }
};

const deleteTodo = async() => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(_id);
    if (!deletedTodo) {
      console.log("error on finding the todo")
    }
  } catch (error) {
    console.log("error on deleting the todo", error);
  }
}


export {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo
}
