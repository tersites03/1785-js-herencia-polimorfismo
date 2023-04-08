/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { CuentaAhorro } from './CuentaAhorro.js';
import {CuentaCorriente} from './CuentaCorriente.js';



const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroDeLeonardo = new CuentaAhorro(cliente,'9985','001', 0);

console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(200);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(50);
console.log(cuentaDeLeonardo.verSaldo());
console.log(cuentaAhorroDeLeonardo);
cuentaAhorroDeLeonardo.depositoEnCuenta(200);
console.log(cuentaAhorroDeLeonardo.verSaldo());
cuentaAhorroDeLeonardo.retirarDeCuenta(50);
console.log(cuentaAhorroDeLeonardo.verSaldo());
console.log(cuentaDeMaria);





