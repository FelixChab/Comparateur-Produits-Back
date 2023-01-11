import {CategoryRepository} from "../repositories/category.repository.mjs";
export class CategoryController {
    repository = new CategoryRepository();

    create(req,res) {
        const { name, characteristics } = req.body;
        if (!name) {
            res.status(400).send({
                message: "name field is missing!"
            });
            return;
        }
        if (!characteristics && !Array.isArray(characteristics)) {
            res.status(400).send({
                message: "characteristics field is missing or is not array!"
            });
            return;
        }

        this.repository.create(name, characteristics)
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

    getCharacteristic(req,res){
        this.repository.getCharacteristic(req.params.id)
            .then(data => {
                if(data) res.send(data);
                else res.status(400).send({message: 'Cannot find category with id: {'+ id +'}'});
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while getting all the characteristic."
                });
            });
    }

    findOne(req,res){

    }

    findProductByCategory(req,res){
        this.repository.findProductByCategory(req.params.id)
            .then((data) => {
            if(data) res.send(data);
            else res.status(400).send({message: 'Cannot find category with id: {'+ id +'}'});
            }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while getting the category."
            });
        })
    };

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
