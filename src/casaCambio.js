import { obtenerSimbolos, obtenerCambiosMoneda } from "./servicios/servicios.js";
import { actualizarTextoDivisa } from "./ui/general.js";
import { mostrarListadoDivisas } from "./ui/listado.js";
import { manejarResultadosDivisas } from "./ui/resultados.js";

export async function iniciar(){
  mostrarListadoDivisas(await obtenerSimbolos(), (simboloDivisa,listaDeDivisa) => {
    actualizarTextoDivisa(listaDeDivisa,simboloDivisa);
    manejarResultadosDivisas(obtenerCambiosMoneda);
  });
}
