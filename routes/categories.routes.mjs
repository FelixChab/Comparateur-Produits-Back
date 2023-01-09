import { Router } from 'express';
import {CategoryController} from "../controllers/category.controller.mjs";


export function categoriesRoutes() {
    const router = Router();
    const controller = new CategoryController();

    router.post('/create', (req, res) => controller.create(req,res));
    router.get('/',(req,res) => controller.findAll(req, res));
    router.post('/delete',(req,res) => controller.delete(req,res));
    return router;
}
