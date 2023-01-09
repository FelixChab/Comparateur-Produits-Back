import {CategoryRepository} from "../repositories/category.repository.mjs";
export class CategoryController {
    repository = new CategoryRepository();

    create(req,res) {
        const { name } = req.body;
        console.log(req.body)
        if (!name) {
            res.status(400).send({
                message: "name field is missing!"
            });
            return;
        }

        this.repository.create(name)
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Category."
                });
            });
    }

    findAll(req,res) {
        this.repository.findAll()
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while finding all the Categories."
                });
            });
    }

    findOne(req,res){

    }

    update(req,res){

    }

    delete(req,res){
        const { id } = req.body;
        this.repository.delete(id)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the Category."
            });
        });
    }

    deleteAll(req,res){

    }

}
