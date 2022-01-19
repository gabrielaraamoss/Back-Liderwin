const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sucursal', {
    idSucursal: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    direccion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ciudad: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    provincia: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    telefono1: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    telefono2: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Sucursal',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idSucursal" },
        ]
      },
    ]
  });
};
