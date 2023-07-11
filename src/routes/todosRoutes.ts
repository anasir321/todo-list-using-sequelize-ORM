import { Router } from "express";
import {
    createTodo,
    deleteTodo,
    getAllTodo,
    updateTodo,
    getTodoById
} from '../controllers/todoController';

const router = Router();

router.get('/getTodos', getAllTodo);
router.post('/createTodo', createTodo);
router.delete('/deleteTodo', deleteTodo);;
router.get('/getTodoById/:id',getTodoById);
router.put('/updateTodo', updateTodo);

export default router;

