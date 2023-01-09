import { db } from "../models/index.mjs";

export class UserRepository {
    create(login, password) {
        const user = {login, password}
        return db.user.create(user)
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