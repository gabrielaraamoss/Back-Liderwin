const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Pago', {
    idPago: {
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
    metodoPago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'MetodoPago',
        key: 'idMetodoPago'
      }
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Pago',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPago" },
        ]
      },
      {
        name: "metodoPago",
        using: "BTREE",
        fields: [
          { name: "metodoPago" },
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
