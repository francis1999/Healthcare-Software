module.exports = (sequelize, DataTypes) => {
    const ProductTable = sequelize.define("Products", {
        ProductName: {
            type: DataTypes.STRING
        },
        ProductImage: {
            type: DataTypes.STRING
        },
        ProductContents: {
            type: DataTypes.STRING,
        }
    });
    return ProductTable;
}