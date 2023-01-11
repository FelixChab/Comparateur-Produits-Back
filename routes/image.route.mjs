import {Router} from "express";
import {ImageController} from "../controllers/image.controller.mjs";

export function imagesRoute() {
    const router = Router();
    const controller = new ImageController();
    router.get('/:id', (req, res) => controller.findOneById(req,res));
    return router;
}