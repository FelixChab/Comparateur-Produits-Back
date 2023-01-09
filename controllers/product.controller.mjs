import {ProductRepository} from "../repositories/product.repository.mjs";

export class ProductController {

    repository = new ProductRepository();

    create(req,res) {
        const { name, description,characteristic,categoryId } = req.body;

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
        if(!categoryId) {
            res.status(400).send({
                message: "categoryId field is missing!"
            });
            return;
        }

        this.repository.create(name,description, characteristic, categoryId)
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the User."
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
