import { db } from "../models/index.mjs";

export class CategoryRepository {

    create(name, characteristics) {
        try {
            const category = {name};
            return db.category.create(category).then(async (cat) => {
                for (const ft of characteristics) {
                    const cha = await db.characteristic_type.create(ft);
                    cat.addCharacteristic_type(cha);
                }
                return Promise.resolve(cat);
            });

        } catch (err) {
            return Promise.reject('Error on creating category');

        }
    }


    findAll() {
        return db.category.findAll();
    }

    getCharacteristic(id){
        return db.category.findOne({include: db.characteristic_type,where: {id: id}});
    }


    findOne(req,res){

    }

    async findProductByCategory(id) {
        const cat = await db.category.findOne({where:{id:id}, include: db.products});
        const catId = cat.id;
        const products = await db.products.findAll({where: {categoryId:catId},include: [{model:db.characteristic_type, attributes:["name"]}]});
        //return products;

        const products_objects = [];
        for(const product of products) {
            const types = [];
            for (const type of product.characteristic_types) {
                types.push({name:type.name, value:type.characteristic_value.value});
            }
            const temp = {id:product.id, name: product.name, price:product.price, image: product.image, description: product.description, characteristics: types};
            products_objects.push(temp);
        }
        const object = {id:cat.id, name:cat.name, products:products_objects};

        return object;
    }

    async update(id,name) {
        const category = await db.category.findOne({id: id});
        category.update({name:name});
        return category.save();
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