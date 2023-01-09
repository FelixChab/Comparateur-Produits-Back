import { db } from "../models/index.mjs";

export class ProductRepository {
    create(name, description, characteristic, categoryId) {
        const product = {name, description, characteristic, categoryId};
        return db.products.create(product);
    }

    findAll() {
        return db.products.findAll();
    }

    findOne(){
    }

    update(){

    }

    delete(id){
        return db.products.findOne({where: {
                id: id
            }
        })
            .then((product) => {
                if(product){
                    return product.destroy();
                } else {
                    return Promise.reject({message: 'Cannot find product with id: {'+ id +'}'});
                }
            });
    }

    deleteAll(){

    }

}