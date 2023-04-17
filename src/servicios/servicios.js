import { 
  obtenerSimbolos as obtenerSimbolosDeApi, 
  obtenerCambiosMoneda as obtenerCambiosMonedaDeApi 
} from "../api/api.js";

import { mapearCambios, mapearSimbolos } from "../mapeador/mapeador.js";

export async function obtenerSimbolos(){
  let simbolosData = await obtenerSimbolosDeApi();
  const SIMBOLOS = mapearSimbolos(simbolosData);
  return SIMBOLOS;
}

export async function obtenerCambiosMoneda(divisaBase,divisaObjetivo,monto){
  if(divisaBase != undefined, divisaObjetivo != undefined, monto != ""){
    let cambiosData = await obtenerCambiosMonedaDeApi(divisaBase,divisaObjetivo,monto);
    const CAMBIOS = mapearCambios(cambiosData);
    return CAMBIOS;
  }
}
