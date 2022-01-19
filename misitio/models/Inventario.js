const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Inventario', {
    idInventario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sucursal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Sucursal',
        key: 'idSucursal'
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Inventario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idInventario" },
        ]
      },
      {
        name: "sucursal",
        using: "BTREE",
        fields: [
          { name: "sucursal" },
        ]
      },
    ]
  });
};
