import { actualizarTextosResultados,ocultarTextosResultados } from "./general.js";

export async function manejarResultadosDivisas(callbackMonedas = () => {}){
  const MONTO = Number(document.querySelector("#monto").value.replace(",","."));
  const DIVISA_BASE = document.querySelector("#divisa-base").dataset.divisa;
  const DIVISA_CAMBIO = document.querySelector("#divisa-conversion").dataset.divisa;
  const SPINNER = document.querySelector("#resultado .spinner-border");
  if(MONTO && DIVISA_BASE && DIVISA_CAMBIO){
    document.querySelector("#resultado").classList.remove("oculto");
    if(SPINNER.classList.contains("oculto")){
      ocultarTextosResultados();
      SPINNER.classList.remove("oculto");
    }
    const CAMBIOS = await callbackMonedas(DIVISA_BASE,DIVISA_CAMBIO,MONTO);
    
    actualizarTextosResultados(CAMBIOS.divisaBase,CAMBIOS.divisaObjetivo,CAMBIOS.monto,CAMBIOS.montoResultado);
    
    SPINNER.classList.add("oculto");
  }
};
