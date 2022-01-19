const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MarcaProveedor', {
    idMarca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Marca',
        key: 'idMarca'
      }
    },
    idProveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Proveedor',
        key: 'idProveedor'
      }
    }
  }, {
    sequelize,
    tableName: 'MarcaProveedor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idMarca" },
          { name: "idProveedor" },
        ]
      },
      {
        name: "idProveedor",
        using: "BTREE",
        fields: [
          { name: "idProveedor" },
        ]
      },
    ]
  });
};
