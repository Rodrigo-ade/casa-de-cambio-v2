import { Cambio } from "../entidades/cambio.js";

//obtenerkey
//guardar
//cargar

function obtenerKeyCambios(divisaBase,divisaObjetivo,monto){
  return`cambio_${divisaBase}_${divisaObjetivo}_${monto}`;
}

export function guardarCambios(divisaBase,divisaObjetivo,monto,cambio){
  localStorage.setItem(obtenerKeyCambios(divisaBase,divisaObjetivo,monto),JSON.stringify(cambio));
}

export function obtenerCambios(divisaBase,divisaObjetivo,monto){
  const CAMBIO = JSON.parse(localStorage.getItem(obtenerKeyCambios(divisaBase,divisaObjetivo,monto)));
  if(CAMBIO === null){
    throw new Error(`no se ha encontrado el cambio`);
  }
  return CAMBIO;
}
