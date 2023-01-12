import { Router } from 'express';
import {CharacteristicController} from "../controllers/characteristic.controller.mjs";


export function characteristicsRoutes() {
    const router = Router();
    const controller = new CharacteristicController();
    router.get('/:id', (req,res) => controller.getMinMaxById(req,res));
    return router;
}
