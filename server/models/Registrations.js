/* const { DataTypes } = require("sequelize/types");
const { sequelize } = require("."); */

module.exports = (sequelize, DataTypes) => {
    const Registrations = sequelize.define("Registrations", {
        Surname: {
            type: DataTypes.STRING,
        },
        Othernames: {
            type: DataTypes.STRING,
        },
        Username: {
            type: DataTypes.STRING,
        },
        Email: {
            type: DataTypes.STRING,
        },
        PhoneNumber: {
            type: DataTypes.STRING,
        },
        Password: {
            type: DataTypes.STRING,
        },
        PasswordConfirmation: {
            type: DataTypes.STRING
        }
    });
    return Registrations;
}