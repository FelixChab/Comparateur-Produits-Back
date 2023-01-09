import { Router } from 'express';
import {UserController} from "../controllers/user.controller.mjs";


export function usersRoutes() {
    const router = Router();
    const controller = new UserController();
    router.post('/create', (req, res) => controller.create(req,res));
    return router;
}
