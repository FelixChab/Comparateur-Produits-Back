import {ProductRepository} from "../repositories/product.repository.mjs";

export class ProductController {

    repository = new ProductRepository();

    create(req,res) {
        const { name, description, price, categoryId, characteristics, image, link } = req.body;
        if (!name) {
            res.status(400).send({
                message: "name field is missing!"
            });
            return;
        }
        if(!description) {
            res.status(400).send({
                message: "description field is missing!"
            });
            return;
        }
        if(!price) {
            res.status(400).send({
                message: "price field is missing!"
            });
            return;
        }
        if(!categoryId) {
            res.status(400).send({
                message: "categoryId field is missing!"
            });
            return;
        }
        if (!characteristics && !Array.isArray(characteristics)) {
            res.status(400).send({
                message: "characteristics field is missing or is not array!"
            });
            return;
        }

        this.repository.create(name, description, price, categoryId,characteristics,image,link)
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Product."
                });
            });
    }

    findAll(req,res) {
        this.repository.findAll()
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while finding all the Users."
                });
            });
    }

    findOne(req,res){
        const id = +req.params.id;
        this.repository.findOne(id)
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while finding all the Users."
                });
            });
    }

    update(req,res){

    }

    delete(req,res){
        const { id } = req.body;
        if (!id) {
            res.status(400).send({
                message: "id field is missing!"
            });
            return;
        }
        this.repository.delete(id)
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).json({
                    message: err.message || "Some error occurred while deleting the User."
                });
            });
    }

    deleteAll(req,res){

    }

}
