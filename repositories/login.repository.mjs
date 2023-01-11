import {db} from "../models/index.mjs";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class LoginRepository {

    login(username,password){
        return db.user.findOne({where:{login: username}}).then((user) => {
            if(!user) return Promise.reject();
            if(!bcrypt.compareSync(password, user.password)) return Promise.reject();
            return jwt.sign({username: user.login, admin:user.admin}, 'shhh');
        })
    }

}