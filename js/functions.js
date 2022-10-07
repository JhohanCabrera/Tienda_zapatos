//Creación de la clase maquina expendedora

class MaquinaExpendedora{

	constructor(){
		//Constructor de la clase
		this.p1 = new Producto('1','Papa Margarita',1700);
		this.p2 = new Producto('2','Jugo Hit',2400);
		this.p3 = new Producto('3','Chocolatina Jet',700);
		this.p4 = new Producto('4','Galleta Festival',800);
	}

	darproducto1(){
		//Me va a retornar el producto1
		return this.p1;
	}

	darproducto2(){
		//Me va a retornar el producto2
		return this.p2;
	}

	darproducto3(){
		//Me va a retornar el producto3
		return this.p3;
	}

	darproducto4(){
		//Me va a retornar el producto3
		return this.p4;
	}

	abastecerProducto1(pUnidades){
		//Abastece producto 1
		//Por ser void no retorna nada
		this.p1.abastecer(pUnidades);
	}

	abastecerProducto2(pUnidades){
		//Abastece producto 2
		//Por ser void no retorna nada 
		this.p2.abastecer(pUnidades);
	}

	abastecerProducto3(pUnidades){
		//Abastece producto 3
		//Por ser void no retorna nada 
		this.p3.abastecer(pUnidades);
	}

	abastecerProducto4(pUnidades){
		//Abastece producto 4
		//Por ser void no retorna nada
		this.p4.abastecer(pUnidades); 
	}

	venderProducto1(){
		//Vende producto y no tiene retorno
		let cantidad = this.p1.darCantidadesUnidadesDisponibles();
		if(cantidad > 0){
			this.p1.vender();	
		}else{
			alert("No se puede vender, no hay existencia");
		}
	}

	venderProducto2(){
		//Vende producto y no tiene retorno
		let cantidad = this.p2.darCantidadesUnidadesDisponibles();
		if(cantidad > 0){
			this.p2.vender();	
		}else{
			alert("No se puede vender, no hay existencia");
		}
	}

	venderProducto3(){
		//Vende producto y no tiene retorno
		let cantidad = this.p3.darCantidadesUnidadesDisponibles();
		if(cantidad > 0){
			this.p3.vender();	
		}else{
			alert("No se puede vender, no hay existencia");
		}
	}

	venderProducto4(){
		//Vende producto y no tiene retorno
		let cantidad = this.p4.darCantidadesUnidadesDisponibles();
		if(cantidad > 0){
			this.p4.vender();	
		}else{
			alert("No se puede vender, no hay existencia");
		}
	}

	darCantidadTotalVentas(){
		//Retorna la cantidad de ventas totales
		let cantidadventas = 	this.p1.darCantidadesUnidadesVendidas()+
								this.p2.darCantidadesUnidadesVendidas()+
								this.p4.darCantidadesUnidadesVendidas()+
								this.p4.darCantidadesUnidadesVendidas();
		return cantidadventas;
		
	}

	darValorTotalVentas(){
		//Retorna el valor total de las ventas	
		let valorventas = 	(this.p1.darCantidadesUnidadesVendidas() * this.p1.darPrecio())+
							(this.p2.darCantidadesUnidadesVendidas() * this.p2.darPrecio())+
							(this.p3.darCantidadesUnidadesVendidas() * this.p3.darPrecio())+
							(this.p4.darCantidadesUnidadesVendidas() * this.p4.darPrecio());
		return valorventas;
	}

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Creación de la clase producto

class Producto{
	constructor(id, nombre, precio){
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
		this.cantidadesUnidadesDisponibles = 0;
		this.cantidadesUnidadesVendidas = 0;
	}

	darIdentificador(){
		//Retorna el identificador del producto
		return this.id;
	}

	darNombre(){
		//Retorna el nombre del producto
		return this.nombre;
	}

	darPrecio(){
		//Retorna el precio del producto
		return this.precio;
	}

	darCantidadesUnidadesDisponibles(){
		//Retorna la cant de unid. disponibles
		return this.cantidadesUnidadesDisponibles;
	}

	darCantidadesUnidadesVendidas(){
		//Retorna la cant. unid. vendidas
		return this.cantidadesUnidadesVendidas;
	}

	abastecer(pUnidades){
		this.cantidadesUnidadesDisponibles = this.cantidadesUnidadesDisponibles + pUnidades;
	}

	vender(){
		this.cantidadesUnidadesDisponibles = this.cantidadesUnidadesDisponibles - 1;
		this.cantidadesUnidadesVendidas = this.cantidadesUnidadesVendidas + 1;
	}
}

// let p = new Producto('4','Producto prueba',4500);
// console.log(p.darNombre());
// console.log(p.darIdentificador());
// console.log(p.darPrecio());
// console.log(p.abastecer(5));
// console.log(p.vender(1));
// console.log(p.darCantidadesUnidadesDisponibles());
// console.log(p.darCantidadesUnidadesVendidas());

let maquina = new MaquinaExpendedora(); //La instancia
function comprar_papas(){
	let cantdisp = maquina.darproducto1().darCantidadesUnidadesDisponibles();
	if(cantdisp <= 0){
		alert("No hay producto para la venta");
	}else{
		maquina.venderProducto1();
		let disp = maquina.darproducto1().darCantidadesUnidadesDisponibles()
		document.getElementById('dispapa').innerHTML = 'Disponible : ' + disp;
	}

}
function abastecer_papas(){
	let cant = prompt("Ingrese la cantidad del producto");
	//Convertir txt a entero
	let c = parseInt(cant);
	maquina.abastecerProducto1(c);
	let disp = maquina.darproducto1().darCantidadesUnidadesDisponibles()
	document.getElementById('dispapa').innerHTML = 'Disponible : ' + disp;
}
function comprarjugo(){
	let cantdisp = maquina.darproducto2().darCantidadesUnidadesDisponibles();
	if(cantdisp <= 0){
		alert("No hay producto para la venta");
	}else{
		maquina.venderProducto2();
		let disp = maquina.darproducto2().darCantidadesUnidadesDisponibles()
		document.getElementById('disjugo').innerHTML = 'Disponible : ' + disp;
	}
}
function abastecerjugo(){
	let cant = prompt("Ingrese la cantidad del producto");
	//Convertir txt a entero
	let c = parseInt(cant);
	maquina.abastecerProducto2(c);
	let disp = maquina.darproducto2().darCantidadesUnidadesDisponibles();
	document.getElementById('disjugo').innerHTML = 'Disponible : ' + disp;	
}
function comprarchocolatina(){
	let cantdisp = maquina.darproducto3().darCantidadesUnidadesDisponibles();
	if(cantdisp <= 0){
		alert("No hay producto para la venta");
	}else{
		maquina.venderProducto3();
		let disp = maquina.darproducto3().darCantidadesUnidadesDisponibles()
		document.getElementById('dischoco').innerHTML = 'Disponible : ' + disp;
	}
}
function abastecerchocolatina(){
	let cant = prompt("Ingrese la cantidad del producto");
	//Convertir txt a entero
	let c = parseInt(cant);
	maquina.abastecerProducto3(c);
	let disp = maquina.darproducto3().darCantidadesUnidadesDisponibles();
	document.getElementById('dischoco').innerHTML = 'Disponible : ' + disp;	
}
function comprargalleta(){
	let cantdisp = maquina.darproducto4().darCantidadesUnidadesDisponibles();
	if(cantdisp <= 0){
		alert("No hay producto para la venta");
	}else{
		maquina.venderProducto4();
		let disp = maquina.darproducto4().darCantidadesUnidadesDisponibles()
		document.getElementById('disgalleta').innerHTML = 'Disponible : ' + disp;
	}
}
function abastecergalleta(){
	let cant = prompt("Ingrese la cantidad del producto");
	//Convertir txt a entero
	let c = parseInt(cant);
	maquina.abastecerProducto4(c);
	let disp = maquina.darproducto4().darCantidadesUnidadesDisponibles();
	document.getElementById('disgalleta').innerHTML = 'Disponible : ' + disp;	
}
function cantidadventas(){
	let cantt = maquina.darCantidadTotalVentas();
	alert("La cantidad total de productos venidos es de: " + cantt);	
}
function valortotalventas(){
	let cantv = maquina.darValorTotalVentas();
	alert("El valor total de ventas es de: $" + cantv);
}
function unidadesvendidas(){
	let vendp = maquina.darproducto1().darCantidadesUnidadesVendidas();
	let vendj = maquina.darproducto2().darCantidadesUnidadesVendidas();
	let vendch = maquina.darproducto3().darCantidadesUnidadesVendidas();
	let vendg = maquina.darproducto4().darCantidadesUnidadesVendidas();

	alert(" La unidad de unidades vendidas por producto es:  \n Papas:" + vendp + 
		"\n Jugos: " + vendj + 
		"\n Chocolatinas: " + vendch + 
		"\n Galletas: " + vendg );
}

