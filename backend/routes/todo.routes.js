import { Router } from "express";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todo.controller.js";

const router = Router();

router.get("/get-todos", getAllTodos);
router.post("/add-todo", addTodo);
router.patch("/update-todo", updateTodo);
router.post("/delete-todo", deleteTodo);

export default router;