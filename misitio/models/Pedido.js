const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Pedido', {
    idPedido: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    factura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Factura',
        key: 'idFactura'
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Pedido',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPedido" },
        ]
      },
      {
        name: "factura",
        using: "BTREE",
        fields: [
          { name: "factura" },
        ]
      },
    ]
  });
};
