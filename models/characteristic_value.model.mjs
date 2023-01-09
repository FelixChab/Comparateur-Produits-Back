export const characteristic_valueModel = (sequelize, Sequelize) => {
    const characteristic = sequelize.define("characteristic_value", {
        value: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },{ timestamps: false });
    return characteristic;
}