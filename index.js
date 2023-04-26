/*Importación de clases*/
import {Cliente} from './Cuentas/Cliente.js'
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import {CuentaAhorro} from './Cuentas/CuentaAhorro.js';
import { Cuenta } from "./Cuentas/Cuenta.js";
import { CuentaNomina } from "./Cuentas/CuentaNomina.js";


const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente,'9985','001',0);
console.log(cuentaAhorroLeonardo);
const CuentaNominaLeonardo = new CuentaNomina ("Leonardo","1","001", 0);

CuentaNominaLeonardo.depositoEnCuenta(150);
console.log(CuentaNominaLeonardo.verSaldo());
CuentaNominaLeonardo.retirarDeCuenta(50);
console.log(CuentaNominaLeonardo.verSaldo());




