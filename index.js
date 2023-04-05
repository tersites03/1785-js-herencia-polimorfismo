/*Importación de clases*/
import {Cliente} from './Cliente.js'
//import {CuentaCorriente} from './CuentaCorriente.js';
//import {CuentaAhorro} from './CuentaAhorro.js';
import {Cuenta} from './Cuentas.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new Cuenta(cliente, '1', '001', 0);
const cuentaDeMaria = new Cuenta(cliente2,'2','002', 0);

const cuentaAhorroDeLeonardo = new Cuenta(cliente,'9985','001', 0);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(700);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(500);
console.log(cuentaDeLeonardo.verSaldo());
console.log(cuentaAhorroDeLeonardo);
cuentaAhorroDeLeonardo.depositoEnCuenta(120);
console.log(cuentaAhorroDeLeonardo.verSaldo());
cuentaAhorroDeLeonardo.retirarDeCuenta(50);
console.log(cuentaAhorroDeLeonardo.verSaldo());
//console.log(cuentaDeMaria);




