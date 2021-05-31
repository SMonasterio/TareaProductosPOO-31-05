/*Tarea en clase
  Cuenta bancaria
Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
  Una propiedad titular con el valor "Alex".
  Una propiedad saldo, teniendo como valor inicial 0.
 Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad
  Un método extraer() que permita retirar la cantidad pasada como parámetro.
  Un método informar() que retorne la información del estado de la cuenta. 
  Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
  */

  class Cuenta {
    constructor(titular, saldo = 0) {
      this.titular = titular;
      this.saldo = saldo;
    }
    ingresar(valor) {
        if (valor<=0) {
            console.error(`Debe ingresar un monton mayor a $0`);
            return;
        }
      this.saldo += valor;
      //saldo = saldo + valor
      this.informar();
    }
    extraer(valor) {
        if (valor>this.saldo) {
            console.warn(`Solo puede extraer hasta $ ${this.saldo}`);
            return;
        }
      this.saldo -= valor;
    }
    informar() {
      console.log("========Detalle de la cuenta========");
      console.log(`Titular: ${this.titular}`);
      console.log(`Saldo:${this.saldo}`);
      console.log("====================================");
    }
  }
  
  let cuenta1 = new Cuenta("Alex");
  