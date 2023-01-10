import {db} from "../models/index.mjs";

export class LoginRepository {

    login(username,password){
        return db.user.findOne({where:{login: username, password:password}});
    }

}