drop schema if exists liderwin;
create schema liderwin;
use liderwin;

create table Sucursal(
	idSucursal int not null auto_increment,
    direccion varchar(50) not null,
    ciudad varchar(15) not null,
    provincia varchar(15) not null,
    telefono1 varchar(10) not null,
    telefono2 varchar(10) not null,
    primary key (idSucursal)
);

create table Empleado(
	idEmpleado int not null auto_increment,
    sucursal int not null,
    cedula varchar(10) not null,
    nombre varchar(25) not null,
    apellido varchar(25) not null,
    email varchar(30) not null,
    telefono varchar(10) not null,
    primary key (idEmpleado),
    foreign key (sucursal) references Sucursal(idSucursal)
);

create table MetodoPago(
	idMetodoPago int not null auto_increment,
    metodoPago varchar(30) not null,
    primary key (idMetodoPago)
);

create table Pago(
	idPago int not null auto_increment,
    factura int not null,
    metodoPago int not null,
    monto float not null,
    fecha datetime not null,
    primary key (idPago),
    foreign key (metodoPago) references MetodoPago(idMetodoPago)
);

create table Factura(
	idFactura int not null auto_increment,
    empleado int not null,
    fechaEmision datetime not null,
    estado boolean not null,
    comentarios varchar(200),
    primary key (idFactura),
    foreign key (empleado) references Empleado(idEmpleado)
);

create table Cliente(
	idCliente int not null auto_increment,
    cedula varchar(10) not null,
    nombre varchar(25) not null,
    apellido varchar(25) not null,
    direccion varchar(50) not null, 
    email varchar(30) not null,
    telefono varchar(10) not null,
    ciudad varchar(15) not null,
    provincia varchar(15) not null,
    limiteCreadito float not null,
    primary key (idCliente)
);

create table Pedido(
	idPedido int not null auto_increment,
    factura int not null,
    fecha datetime not null,
    primary key (idPedido),
    foreign key (factura) references Factura(idFactura)
);

create table Envio(
	idEnvio int not null auto_increment,
    pedido int not null,
    ubicacionSalida varchar(50) not null,
    ubicacionDestino varchar(50) not null,
    fecha datetime not null,
    primary key (idEnvio),
    foreign key (pedido) references Pedido(idPedido)
);

create table Item(
	idItem int not null auto_increment,
    producto int not null,
    nombre varchar(25) not null,
    precio float not null,
    descripcion varchar(200) not null,
    descuento float not null,
    porcentajeDesc float not null,
    iva float not null,
    primary key (idItem)
);

create table DetallePedido(
	idPedido int not null,
    idItem int not null,
    cantidad int not null,
    precioTotal float not null,
    primary key (idPedido, idItem),
    foreign key (idPedido) references Pedido(idPedido),
    foreign key (idItem) references Item(idItem)
);

create table Inventario(
	idInventario int not null auto_increment,
    sucursal int not null,
    stock int(5) not null,
    primary key (idInventario),
    foreign key (sucursal) references Sucursal(idSucursal)
);

create table Producto(
	idProducto int not null auto_increment,
    inventario int not null,
    nombre varchar(50) not null,
    fechaIngreso datetime not null,
    descripcion varchar(200) not null,
    pvsf varchar (10) not null,
    descuento float not null,
    iva float not null,
    primary key (idProducto),
    foreign key (inventario) references Inventario(idInventario)
);

create table Categoria(
	idCategoria int not null auto_increment,
    nombre varchar(50) not null,
    descripcion varchar(200) not null,
    primary key (idCategoria)
);

create table Subcategoria(
	idSubcategoria int not null auto_increment,
    categoria int not null,
    nombre varchar(50) not null,
    descripcion varchar(200) not null,
    primary key (idSubcategoria),
    foreign key (categoria) references Categoria(idCategoria)
);

create table Marca(
	idMarca int not null auto_increment,
    nombre varchar(50) not null,
    descripcion varchar(200) not null,
    logo varchar(100) not null,
    primary key (idMarca)
);

create table Proveedor(
	idProveedor int not null auto_increment,
    nombre varchar(50) not null,
    telefono varchar(10) not null,
    direccion varchar(50) not null,
    ciudad varchar(15) not null,
    provincia varchar(15) not null,
    pais varchar(15) not null,
    primary key (idProveedor)
);

create table Servicio(
	idServicio int not null auto_increment,
    fechaInicio datetime not null,
    fechaFinal datetime not null,
    primary key (idServicio)
);

create table ServicioProveedor(
	idServicio int not null,
    idProveedor int not null,
    primary key (idServicio, idProveedor),
    foreign key (idServicio) references Servicio(idServicio),
    foreign key (idProveedor) references Proveedor(idProveedor)
);

create table MarcaProveedor(
	idMarca int not null,
    idProveedor int not null,
    primary key (idMarca, idProveedor),
    foreign key (idMarca) references Marca(idMarca),
    foreign key (idProveedor) references Proveedor(idProveedor)
);

alter table Pago 
add foreign key (factura)
references Factura(idFactura);

alter table Factura 
add cliente int not null;

alter table Factura 
add foreign key (cliente)
references Cliente(idCliente);


alter table Item
add servicio int not null;

alter table Item 
add foreign key (servicio)
references Servicio(idServicio);

alter table Producto
add subcategoria int not null;

alter table Producto 
add foreign key (subcategoria)
references Subcategoria(idSubcategoria);

alter table Producto
add marca int not null;

alter table Producto 
add foreign key (marca)
references Marca(idMarca);

alter table Item 
add foreign key (producto)
references Producto(idProducto);