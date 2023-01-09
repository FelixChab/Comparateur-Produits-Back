import { db } from "../models/index.mjs";

export class UserRepository {
    create(login, password) {
        const user = {login, password}
        return db.user.create(user)
    }

    findAll() {
        return db.user.findAll();
    }

    findOne(login){
    }

    update(){

    }

    delete(id){
        return db.user.findOne({where: {
                id: id
            }
    })
    .then((user) => {
            if(user){
                return user.destroy();
            } else {
                return Promise.reject({message: 'Cannot find user with id: {'+ id+'}'});
            }
        });
    }

    deleteAll(){

    }

}