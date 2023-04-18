import { 
  obtenerSimbolos as obtenerSimbolosDeApi, 
  obtenerCambiosMoneda as obtenerCambiosMonedaDeApi 
} from "../api/api.js";

import { mapearCambios, mapearSimbolos } from "../mapeador/mapeador.js";

import { guardarCambios,obtenerCambios as obtenerCambiosMonedaDeStorage } from "../storage/storage.js";

export async function obtenerSimbolos(){
  let simbolosData = await obtenerSimbolosDeApi();
  const SIMBOLOS = mapearSimbolos(simbolosData);
  return SIMBOLOS;
}

export async function obtenerCambiosMoneda(divisaBase,divisaObjetivo,monto){
  if(divisaBase != undefined, divisaObjetivo != undefined, monto != ""){
    let cambios;
    
    try{
      cambios = obtenerCambiosMonedaDeStorage(divisaBase,divisaObjetivo,monto);
    }catch (e) {
      let cambiosData = await obtenerCambiosMonedaDeApi(divisaBase,divisaObjetivo,monto);
      cambios = mapearCambios(cambiosData);
      guardarCambios(divisaBase,divisaObjetivo,monto,cambios);
    }

    return cambios;
  }
}
