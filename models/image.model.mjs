export const imageModel = (sequelize, Sequelize) => {
    const image = sequelize.define("image", {
        data: {
            type: Sequelize.BLOB('long'),
            allowNull: false
        }
    });
    return image;
}