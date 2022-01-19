const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Producto', {
    idProducto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    inventario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Inventario',
        key: 'idInventario'
      }
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    fechaIngreso: {
      type: DataTypes.DATE,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    pvsf: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descuento: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    iva: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    subcategoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Subcategoria',
        key: 'idSubcategoria'
      }
    },
    marca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Marca',
        key: 'idMarca'
      }
    }
  }, {
    sequelize,
    tableName: 'Producto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProducto" },
        ]
      },
      {
        name: "inventario",
        using: "BTREE",
        fields: [
          { name: "inventario" },
        ]
      },
      {
        name: "subcategoria",
        using: "BTREE",
        fields: [
          { name: "subcategoria" },
        ]
      },
      {
        name: "marca",
        using: "BTREE",
        fields: [
          { name: "marca" },
        ]
      },
    ]
  });
};
