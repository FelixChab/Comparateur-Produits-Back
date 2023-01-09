export const userModel = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
        login: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        admin: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
    return user;
}