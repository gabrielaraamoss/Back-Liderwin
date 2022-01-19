const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Envio', {
    idEnvio: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Pedido',
        key: 'idPedido'
      }
    },
    ubicacionSalida: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ubicacionDestino: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Envio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEnvio" },
        ]
      },
      {
        name: "pedido",
        using: "BTREE",
        fields: [
          { name: "pedido" },
        ]
      },
    ]
  });
};
