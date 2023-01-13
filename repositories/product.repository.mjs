import { db } from "../models/index.mjs";
export class ProductRepository {

    async create(name, description, price, categoryId, characteristics,image, link) {
        try{
            let product = {name, description, categoryId, price, link};
            product = await db.products.create(product);
            await db.images.create({data:image, productId: product.id});

            for (const ft of characteristics) {
                const cha_type = await db.characteristic_type.findOne({where: {id: ft.characteristicTypeId}});
                await db.characteristic_value.create({value: ft.value, productId: product.id, characteristicTypeId: cha_type.id});
            }
            return product;
        } catch(err){
           // return Promise.reject('Error on creating product');
        }
    }



        // return db.products.create(product).then(async product => {
        //     try {
        //         category.addProduct(product);
        //         for (const ft of characteristics) {
        //             const cha_type = await db.characteristic_type.findOne({where: {id: ft.id}});
        //             const cha_value = db.characteristic_type.create(ft.value);
        //             cha_value.addCharacteristic_type(cha_type);
        //             cha_value.addProduct(product);
        //             cat.addCharacteristic_value(cha_value);
        //         }
        //     } catch (err) {
        //         return Promise.reject(err);
        //     }
        //     return Promise.resolve(product);
        // });

    findAll() {
        return db.products.findAll();
    }

    findOne(id) {
        return db.products.findOne({where: {id:id},include: [{model:db.characteristic_type, attributes:["name", "type"]}]});
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

    latests(){
        return db.products.findAll({limit:5,   order: db.sequelize.col('id', 'DESC')});
    }

    getImage(id){
        return db.images.findOne({where:{productId:id}});
    }
    
}