import {Sequelize} from "sequelize";
import { productModel } from "./product.model.mjs";
import { categoryModel } from "./category.model.mjs";
import dotenv from "dotenv";
import {userModel} from "./user.model.mjs";

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

    db.user = userModel(sequelize, Sequelize);
    db.category = categoryModel(sequelize, Sequelize);
    db.products = productModel(sequelize, Sequelize);

    db.category.hasOne(db.products, {
        foreignKey: {
            allowNull: false
        }
    });

export { db };

