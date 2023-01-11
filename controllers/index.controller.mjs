import {ProductRepository} from "../repositories/product.repository.mjs";
import {LoginRepository} from "../repositories/login.repository.mjs";
import jwt from "jsonwebtoken";

export class IndexController {

    loginRepository = new LoginRepository();
    status(req, res) {
        res.status(200).end('OK');
    }

    login(req,res) {
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
        this.loginRepository.login(login, password)
            .then((token)=> {
                if(!token){
                    res.status(500).send({
                        message: "Cannot connect!"
                    });
                    return;
                }
            res.send({token:token});
        })
            .catch(err => {
            res.status(500).send({
                message: "Cannot connect!"
            });
        });
    }
}
