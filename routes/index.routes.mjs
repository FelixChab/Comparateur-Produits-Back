import { Router } from 'express';
import {IndexController} from "../controllers/index.controller.mjs";


export function indexRoutes() {
    const router = Router();
    const controller = new IndexController();
    router.get('/status', (req, res) => controller.status(req,res));
    router.post('/login', (req,res) => controller.login(req,res));
    return router;
}
