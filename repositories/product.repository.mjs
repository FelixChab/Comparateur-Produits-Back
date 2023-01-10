import { db } from "../models/index.mjs";
import {CharacteristicRepository} from "./characteristic.repository.mjs";

export class ProductRepository {

    characteristicRepository = new CharacteristicRepository();
    create(name, description, categoryId, characteristics) {
        const product = {name, description, categoryId};
        return db.products.create(product).then(product => {
            try {
                characteristics.forEach((ft) => {
                    this.characteristicRepository.createValue(ft.characteristicTypeId, product.id, ft.value);
                });
            } catch(err) {
                return Promise.reject(err);
            }
            return Promise.resolve(product);
        });
    }

    findAll() {
        return db.products.findAll();
    }

    findOne(id) {
        return  db.products.findOne({include: db.category}, {where: {id: id}});
    }

    update() {
        // TODO
    }

    delete(id) {
        return db.products.findOne({where: {id: id}})
            .then((product) => {
                if (product) {
                    return product.destroy();
                } else {
                    return Promise.reject({message: 'Cannot find product with id: {'+ id +'}'});
                }
            });
    }

    deleteAll() {
        // TODO
    }
    
}