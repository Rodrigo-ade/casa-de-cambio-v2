import { Cambio } from "../entidades/cambio.js";

export function mapearSimbolos(datosApi){
  const {
    symbols: simbolos,
  } = datosApi

  return simbolos;
}

export function mapearCambios(datosApi){
  const{
    query: { amount: monto },
    query: { from: divisaBase },
    query: { to: divisaObjetivo},
    result: montoResultado,
  } = datosApi;

  return new Cambio(
    divisaBase,divisaObjetivo,monto,montoResultado,
  )
}
