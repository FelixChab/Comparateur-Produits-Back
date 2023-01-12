import { Router } from 'express';
import {ProductController} from "../controllers/product.controller.mjs";


export function productsRoutes() {
    const router = Router();
    const controller = new ProductController();
    router.get('/', (req,res) => controller.findAll(req,res));
    router.get('/latests', (req,res) => controller.latests(req,res));
    router.post('/create', (req, res) => controller.create(req,res));
    router.post('/delete', (req,res) => controller.delete(req,res));
    router.get('/:id', (req,res) => controller.findOne(req,res));
    return router;
}
