export const productModel = (sequelize, Sequelize) => {
    const product = sequelize.define("product", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        characteristic:{
            type: Sequelize.JSON,
            allowNull: true
        }
    });
    return product;
}