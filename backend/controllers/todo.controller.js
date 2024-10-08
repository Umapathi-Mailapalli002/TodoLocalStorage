import { Todo } from "../models/todo.model";

const addTodo = async (req, res) => {
  const content = req.body;
  if (content.trim() === "") {
    throw new Error("content of the todo can't be empty");
  }

  const todo = await Todo.create({
    content,
  });

  return res.status(201).json({
    msg: "Todo added successfully",
    data: todo,
  });
};

const updateTodo = async (req, res) => {
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
  return res
  .status(200)
  .json({msg: "data was successfully updated", data: updateTodo})
};
