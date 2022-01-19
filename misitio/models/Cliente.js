const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Cliente', {
    idCliente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cedula: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(10),
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
    limiteCreadito: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCliente" },
        ]
      },
    ]
  });
};
