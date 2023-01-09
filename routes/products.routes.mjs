import { Router } from 'express';
import {ProductController} from "../controllers/product.controller.mjs";


export function productsRoutes() {
    const router = Router();
    const controller = new ProductController();
    router.get('/', (req,res) => controller.findAll(req,res));
    router.post('/create', (req, res) => controller.create(req,res));
    router.post('/delete', (req,res) => controller.delete(req,res));
    return router;
}
