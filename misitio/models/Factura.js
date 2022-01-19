const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Factura', {
    idFactura: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    empleado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Empleado',
        key: 'idEmpleado'
      }
    },
    fechaEmision: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    comentarios: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Cliente',
        key: 'idCliente'
      }
    }
  }, {
    sequelize,
    tableName: 'Factura',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idFactura" },
        ]
      },
      {
        name: "empleado",
        using: "BTREE",
        fields: [
          { name: "empleado" },
        ]
      },
      {
        name: "cliente",
        using: "BTREE",
        fields: [
          { name: "cliente" },
        ]
      },
    ]
  });
};
