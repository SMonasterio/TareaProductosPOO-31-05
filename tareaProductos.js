/*Escribe una clase Producto para crear objetos. 
----------------------------------------------------
Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos,
el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    console.log(`Código: ${this.codigo}`);
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Precio: ${this.precio}`);
  }
}

let Producto1 = new Producto("UE202020", "Arroz", "$30");
let Producto2 = new Producto("UE202021", "Manteca", "$80");
let Producto3 = new Producto("UE202022", "Leche", "$100");

//let productosSuper = [Producto1, Producto2, Producto3];
let p = []
p.push(Producto1, Producto2, Producto3)

//productosSuper.forEach(function (Producto) {
  p.forEach(function (Producto) {
  console.log("----------------------------------");
   /*console.log(`
    - Código: ${Producto.codigo} 
    - Nombre: ${Producto.nombre} 
    - Precio: ${Producto.precio} `)
  */
 Producto.imprimeDatos()  
   console.log("----------------------------------");
});


//Como resolverlo con un FOR y un pompt
/*for (let i = 0; i <3 ; i++) {
 let codigo=prompt('Cargue código')
 let nombre=prompt('Cargue nombre')
 let precio=prompt('Cargue precio')
 p.push( new Producto(codigo, nombre, precio));
 p[i].imprimeDatos()  
}
*/
