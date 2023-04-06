import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuentas.js";

export class CuentaCorriente extends Cuenta{   
    static cantidadCuentas = 0;    
   
    constructor(cliente, numero, agencia) {
    super(cliente, numero, agencia, 0);
     CuentaCorriente.cantidadCuentas++;
    }

}