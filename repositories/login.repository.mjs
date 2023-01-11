import {db} from "../models/index.mjs";
import jwt from 'jsonwebtoken';

export class LoginRepository {

    login(username,password){
        return db.user.findOne({where:{login: username, password:password}}).then((user) => {
            if(!user) return Promise.reject();
            return jwt.sign({username: user.login, admin:user.admin}, 'shhh');

        })
    }

}