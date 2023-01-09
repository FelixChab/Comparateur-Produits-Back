export const categoryModel = (sequelize, Sequelize) => {
    const category = sequelize.define("category", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return category;
}