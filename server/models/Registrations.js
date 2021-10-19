/* const { DataTypes } = require("sequelize/types");
const { sequelize } = require("."); */

module.exports = (sequelize, DataTypes) => {
    const Registrations = sequelize.define("Registrations", {
        surname: {
            type: DataTypes.STRING,
        },
        othernames: {
            type: DataTypes.STRING,
        },
        username: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        phoneNumber: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        passwordConfirmation: {
            type: DataTypes.STRING
        }
    });
    return Registrations;
}