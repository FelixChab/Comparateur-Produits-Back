import {Sequelize} from "sequelize";
import { productModel } from "./product.model.mjs";
import { categoryModel } from "./category.model.mjs";
import dotenv from "dotenv";
import {userModel} from "./user.model.mjs";
import {characteristic_typeModel} from "./characteristic_type.model.mjs";
import {characteristic_valueModel} from "./characteristic_value.model.mjs";
import {tokenModel} from "./token.model.mjs";

    dotenv.config();
    const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'mariadb',
        operatorsAliases: false,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 1
        }
    });

    const db = {};

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    db.token = tokenModel(sequelize,Sequelize);
    db.user = userModel(sequelize, Sequelize);
    db.category = categoryModel(sequelize, Sequelize);
    db.products = productModel(sequelize, Sequelize);
    db.characteristic_type = characteristic_typeModel(sequelize, Sequelize);
    db.characteristic_value = characteristic_valueModel(sequelize, Sequelize);

    db.user.hasMany(db.token);
    db.category.hasOne(db.products, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKey: {
            allowNull: false
        }
    });

    db.category.hasMany(db.characteristic_type);

    db.products.belongsToMany(db.characteristic_type, {through: db.characteristic_value});
    db.characteristic_type.belongsToMany(db.products, {through: db.characteristic_value});



export { db };

