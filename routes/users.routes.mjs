import { Router } from 'express';
import {UserController} from "../controllers/user.controller.mjs";


export function usersRoutes() {
    const router = Router();
    const controller = new UserController();
    router.get('/:id', (req,res) => controller.findOne(req,res));
    router.get('/', (req,res) => controller.findAll(req,res));
    router.post('/create', (req, res) => controller.create(req,res));
    router.post('/delete', (req,res) => controller.delete(req,res));
    return router;
}
