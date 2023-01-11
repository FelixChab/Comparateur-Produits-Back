import { db } from "../models/index.mjs";
import bcrypt from 'bcrypt';

export class UserRepository {

    create(login, password) {
        password = bcrypt.hashSync(password, 10);
        const user = {login, password};
        return db.user.create(user)
    }

    findAll() {
        return db.user.findAll();
    }

    findOne(id) {
        return db.user.findOne({where: {id:id}});
    }

    update() {
        // TODO
    }

    delete(id){
        return db.user.findOne({where: { id: id }}).then((user) => {
            if(user) {
                return user.destroy();
            } else {
                return Promise.reject({message: 'Cannot find user with id: {'+ id+'}'});
            }
        });
    }

    deleteAll() {
        // TODO
    }

}