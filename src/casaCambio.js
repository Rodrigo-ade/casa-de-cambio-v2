import { obtenerSimbolos, obtenerCambiosMoneda } from "./servicios/servicios.js";
import { actualizarTextoDivisa, ocultarTextosResultados, manejarResultadosDivisas } from "./ui/general.js";
import { mostrarListadoDivisas } from "./ui/general.js";
import { actualizarTextosResultados } from "./ui/general.js";


export async function iniciar(){
  mostrarListadoDivisas(await obtenerSimbolos(), (simboloDivisa,listaDeDivisa) => {
    actualizarTextoDivisa(listaDeDivisa,simboloDivisa);
    manejarResultadosDivisas(obtenerCambiosMoneda);
  });
}
