import { Router } from 'express';

export class IndexController {
    repository;

    constructor() {
    }

    status(req, res) {
        res.status(200).end('OK');
    }
}
