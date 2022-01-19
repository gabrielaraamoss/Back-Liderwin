const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Item', {
    idItem: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Producto',
        key: 'idProducto'
      }
    },
    nombre: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    descuento: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    porcentajeDesc: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    iva: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    servicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Servicio',
        key: 'idServicio'
      }
    }
  }, {
    sequelize,
    tableName: 'Item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idItem" },
        ]
      },
      {
        name: "servicio",
        using: "BTREE",
        fields: [
          { name: "servicio" },
        ]
      },
      {
        name: "producto",
        using: "BTREE",
        fields: [
          { name: "producto" },
        ]
      },
    ]
  });
};
