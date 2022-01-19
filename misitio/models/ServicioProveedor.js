const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ServicioProveedor', {
    idServicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Servicio',
        key: 'idServicio'
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
    tableName: 'ServicioProveedor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idServicio" },
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
