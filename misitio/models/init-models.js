var DataTypes = require("sequelize").DataTypes;
var _Categoria = require("./Categoria");
var _Cliente = require("./Cliente");
var _DetallePedido = require("./DetallePedido");
var _Empleado = require("./Empleado");
var _Envio = require("./Envio");
var _Factura = require("./Factura");
var _Inventario = require("./Inventario");
var _Item = require("./Item");
var _Marca = require("./Marca");
var _MarcaProveedor = require("./MarcaProveedor");
var _MetodoPago = require("./MetodoPago");
var _Pago = require("./Pago");
var _Pedido = require("./Pedido");
var _Producto = require("./Producto");
var _Proveedor = require("./Proveedor");
var _Servicio = require("./Servicio");
var _ServicioProveedor = require("./ServicioProveedor");
var _Subcategoria = require("./Subcategoria");
var _Sucursal = require("./Sucursal");

function initModels(sequelize) {
  var Categoria = _Categoria(sequelize, DataTypes);
  var Cliente = _Cliente(sequelize, DataTypes);
  var DetallePedido = _DetallePedido(sequelize, DataTypes);
  var Empleado = _Empleado(sequelize, DataTypes);
  var Envio = _Envio(sequelize, DataTypes);
  var Factura = _Factura(sequelize, DataTypes);
  var Inventario = _Inventario(sequelize, DataTypes);
  var Item = _Item(sequelize, DataTypes);
  var Marca = _Marca(sequelize, DataTypes);
  var MarcaProveedor = _MarcaProveedor(sequelize, DataTypes);
  var MetodoPago = _MetodoPago(sequelize, DataTypes);
  var Pago = _Pago(sequelize, DataTypes);
  var Pedido = _Pedido(sequelize, DataTypes);
  var Producto = _Producto(sequelize, DataTypes);
  var Proveedor = _Proveedor(sequelize, DataTypes);
  var Servicio = _Servicio(sequelize, DataTypes);
  var ServicioProveedor = _ServicioProveedor(sequelize, DataTypes);
  var Subcategoria = _Subcategoria(sequelize, DataTypes);
  var Sucursal = _Sucursal(sequelize, DataTypes);

  Item.belongsToMany(Pedido, { as: 'idPedido_Pedidos', through: DetallePedido, foreignKey: "idItem", otherKey: "idPedido" });
  Marca.belongsToMany(Proveedor, { as: 'idProveedor_Proveedors', through: MarcaProveedor, foreignKey: "idMarca", otherKey: "idProveedor" });
  Pedido.belongsToMany(Item, { as: 'idItem_Items', through: DetallePedido, foreignKey: "idPedido", otherKey: "idItem" });
  Proveedor.belongsToMany(Marca, { as: 'idMarca_Marcas', through: MarcaProveedor, foreignKey: "idProveedor", otherKey: "idMarca" });
  Proveedor.belongsToMany(Servicio, { as: 'idServicio_Servicios', through: ServicioProveedor, foreignKey: "idProveedor", otherKey: "idServicio" });
  Servicio.belongsToMany(Proveedor, { as: 'idProveedor_Proveedor_ServicioProveedors', through: ServicioProveedor, foreignKey: "idServicio", otherKey: "idProveedor" });
  Subcategoria.belongsTo(Categoria, { as: "categoria_Categorium", foreignKey: "categoria"});
  Categoria.hasMany(Subcategoria, { as: "Subcategoria", foreignKey: "categoria"});
  Factura.belongsTo(Cliente, { as: "cliente_Cliente", foreignKey: "cliente"});
  Cliente.hasMany(Factura, { as: "Facturas", foreignKey: "cliente"});
  Factura.belongsTo(Empleado, { as: "empleado_Empleado", foreignKey: "empleado"});
  Empleado.hasMany(Factura, { as: "Facturas", foreignKey: "empleado"});
  Pago.belongsTo(Factura, { as: "factura_Factura", foreignKey: "factura"});
  Factura.hasMany(Pago, { as: "Pagos", foreignKey: "factura"});
  Pedido.belongsTo(Factura, { as: "factura_Factura", foreignKey: "factura"});
  Factura.hasMany(Pedido, { as: "Pedidos", foreignKey: "factura"});
  Producto.belongsTo(Inventario, { as: "inventario_Inventario", foreignKey: "inventario"});
  Inventario.hasMany(Producto, { as: "Productos", foreignKey: "inventario"});
  DetallePedido.belongsTo(Item, { as: "idItem_Item", foreignKey: "idItem"});
  Item.hasMany(DetallePedido, { as: "DetallePedidos", foreignKey: "idItem"});
  MarcaProveedor.belongsTo(Marca, { as: "idMarca_Marca", foreignKey: "idMarca"});
  Marca.hasMany(MarcaProveedor, { as: "MarcaProveedors", foreignKey: "idMarca"});
  Producto.belongsTo(Marca, { as: "marca_Marca", foreignKey: "marca"});
  Marca.hasMany(Producto, { as: "Productos", foreignKey: "marca"});
  Pago.belongsTo(MetodoPago, { as: "metodoPago_MetodoPago", foreignKey: "metodoPago"});
  MetodoPago.hasMany(Pago, { as: "Pagos", foreignKey: "metodoPago"});
  DetallePedido.belongsTo(Pedido, { as: "idPedido_Pedido", foreignKey: "idPedido"});
  Pedido.hasMany(DetallePedido, { as: "DetallePedidos", foreignKey: "idPedido"});
  Envio.belongsTo(Pedido, { as: "pedido_Pedido", foreignKey: "pedido"});
  Pedido.hasMany(Envio, { as: "Envios", foreignKey: "pedido"});
  Item.belongsTo(Producto, { as: "producto_Producto", foreignKey: "producto"});
  Producto.hasMany(Item, { as: "Items", foreignKey: "producto"});
  MarcaProveedor.belongsTo(Proveedor, { as: "idProveedor_Proveedor", foreignKey: "idProveedor"});
  Proveedor.hasMany(MarcaProveedor, { as: "MarcaProveedors", foreignKey: "idProveedor"});
  ServicioProveedor.belongsTo(Proveedor, { as: "idProveedor_Proveedor", foreignKey: "idProveedor"});
  Proveedor.hasMany(ServicioProveedor, { as: "ServicioProveedors", foreignKey: "idProveedor"});
  Item.belongsTo(Servicio, { as: "servicio_Servicio", foreignKey: "servicio"});
  Servicio.hasMany(Item, { as: "Items", foreignKey: "servicio"});
  ServicioProveedor.belongsTo(Servicio, { as: "idServicio_Servicio", foreignKey: "idServicio"});
  Servicio.hasMany(ServicioProveedor, { as: "ServicioProveedors", foreignKey: "idServicio"});
  Producto.belongsTo(Subcategoria, { as: "subcategoria_Subcategorium", foreignKey: "subcategoria"});
  Subcategoria.hasMany(Producto, { as: "Productos", foreignKey: "subcategoria"});
  Empleado.belongsTo(Sucursal, { as: "sucursal_Sucursal", foreignKey: "sucursal"});
  Sucursal.hasMany(Empleado, { as: "Empleados", foreignKey: "sucursal"});
  Inventario.belongsTo(Sucursal, { as: "sucursal_Sucursal", foreignKey: "sucursal"});
  Sucursal.hasMany(Inventario, { as: "Inventarios", foreignKey: "sucursal"});

  return {
    Categoria,
    Cliente,
    DetallePedido,
    Empleado,
    Envio,
    Factura,
    Inventario,
    Item,
    Marca,
    MarcaProveedor,
    MetodoPago,
    Pago,
    Pedido,
    Producto,
    Proveedor,
    Servicio,
    ServicioProveedor,
    Subcategoria,
    Sucursal,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
