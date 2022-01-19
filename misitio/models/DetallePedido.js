const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DetallePedido', {
    idPedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Pedido',
        key: 'idPedido'
      }
    },
    idItem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Item',
        key: 'idItem'
      }
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    precioTotal: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'DetallePedido',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPedido" },
          { name: "idItem" },
        ]
      },
      {
        name: "idItem",
        using: "BTREE",
        fields: [
          { name: "idItem" },
        ]
      },
    ]
  });
};
