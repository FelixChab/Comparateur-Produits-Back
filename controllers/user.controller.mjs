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

    }

    findOne(req,res){

    }

    update(req,res){

    }

    delete(req,res){

    }

    deleteAll(req,res){

    }

}
