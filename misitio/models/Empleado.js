const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Empleado', {
    idEmpleado: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sucursal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Sucursal',
        key: 'idSucursal'
      }
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
    email: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Empleado',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEmpleado" },
        ]
      },
      {
        name: "sucursal",
        using: "BTREE",
        fields: [
          { name: "sucursal" },
        ]
      },
    ]
  });
};
