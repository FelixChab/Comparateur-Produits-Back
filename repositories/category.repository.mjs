import { db } from "../models/index.mjs";

export class CategoryRepository {
    create(name) {
        const category = {name}
        return db.category.create(category)
    }

    findAll(req,res) {
        return db.category.findAll();
    }

    findOne(req,res){

    }

    update(req,res){

    }

    delete(id){
        return db.category.findOne({where: {
            id: id
        }}).then((category) => {
        if(category){
            return category.destroy();
        } else {
            return Promise.reject({message: 'Cannot find category with id: {'+ id+'}'});
        }
        });
    }

    deleteAll(req,res){
        
    }

}