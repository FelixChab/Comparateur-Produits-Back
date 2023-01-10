export const characteristic_typeModel = (sequelize, Sequelize) => {
    const characteristic = sequelize.define("characteristic_type", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type:{
            type: Sequelize.STRING,
            allowNull: false
        }
    },{ timestamps: false });
    return characteristic;
}