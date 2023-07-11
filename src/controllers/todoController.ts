import { RequestHandler, Request, Response } from "express";
import { Todos } from "../models/todos";

export const createTodo: RequestHandler = async (
  req: Request,
  res: Response,
  next
) => {
  var todos = await Todos.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Todo created successfully", data: todos });
};

export const deleteTodo: RequestHandler = async (
  req: Request,
  res: Response,
  next
) => {
  const { id } = req.body;
  const deleteTodo: Todos | null = await Todos.findByPk(id);
  await Todos.destroy({
    where: { id },
  });
  return res
    .status(200)
    .json({ message: "Todo item deleted successfully", data: deleteTodo });
};

export const getAllTodo: RequestHandler = async (
  req: Request,
  res: Response,
  next
) => {
  const allTodos = await Todos.findAll();
  return res
    .status(200)
    .json({ message: "All todo items found successfully", data: allTodos });
};

export const updateTodo: RequestHandler = async (
  req: Request,
  res: Response,
  next
) => {
  const { id } = req.params;
  await Todos.update({ ...req.body }, { where: { id } });
  const updatedTodos: Todos | null = await Todos.findByPk(id);
  return res
    .status(200)
    .json({
      message: `Todo item with ID ${id} updated successfully`,
      data: updatedTodos,
    });
};

export const getTodoById: RequestHandler = async (
  req: Request,
  res: Response,
  next
) => {
  const { id } = req.params;
  const todos: Todos | null = await Todos.findByPk(id);
  return res
    .status(200)
    .json({
      message: `Todo item with ID ${id} found successfully`,
      data: todos,
    });
};
