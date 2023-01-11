import { db } from "../models/index.mjs";
import {CharacteristicRepository} from "./characteristic.repository.mjs";

export class CategoryRepository {
    
    characteristicRepository = new CharacteristicRepository();
    create(name, characteristics) {
        const category = {name};
        return db.category.create(category).then((cat) => {
            characteristics.forEach((ft) => {
                this.characteristicRepository.createType(ft.name, ft.type, cat.id);
            });
            return Promise.resolve(cat);
        });
    }

    findAll() {
        return db.category.findAll({include: db.products });
    }

    getCharacteristic(id){
        return db.category.findOne({include: db.characteristic_type,where: {id: id}});
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