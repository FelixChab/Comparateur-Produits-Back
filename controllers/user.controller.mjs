import {UserRepository} from "../repositories/user.repository.mjs";
export class UserController {
    repository = new UserRepository();
    create(req,res) {
        const { login, password } = req.body;

        if (!login) {
            res.status(400).send({
                message: "login field is missing!"
            });
            return;
        }
        if(!password) {
            res.status(400).send({
                message: "password field is missing!"
            });
            return;
        }

        this.repository.create(login,password)
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
