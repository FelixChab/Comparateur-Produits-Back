export const productModel = (sequelize, Sequelize) => {
    const product = sequelize.define("product", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        image: {
            type: Sequelize.BLOB('long'),
            allowNull: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        link: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
    return product;
}