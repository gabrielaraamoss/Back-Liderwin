const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Subcategoria', {
    idSubcategoria: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Categoria',
        key: 'idCategoria'
      }
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Subcategoria',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idSubcategoria" },
        ]
      },
      {
        name: "categoria",
        using: "BTREE",
        fields: [
          { name: "categoria" },
        ]
      },
    ]
  });
};
