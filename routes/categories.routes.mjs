import { Router } from 'express';
import {CategoryController} from "../controllers/category.controller.mjs";


export function categoriesRoutes() {
    const router = Router();
    const controller = new CategoryController();

    router.get('/',(req,res) => controller.findAll(req, res));
    router.post('/create', (req, res) => controller.create(req,res));
    router.post('/delete',(req,res) => controller.delete(req,res));
    router.get('/:id/characteristic', (req,res) => controller.getCharacteristic(req,res));
    return router;
}
