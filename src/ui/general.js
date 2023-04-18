export function actualizarTextosResultados(divisaBase,divisaObjetivo,monto,montoResultado){
  document.querySelector("#resultado-pedido").innerText =`${monto} ${divisaBase} = ${montoResultado.toFixed(2)} ${divisaObjetivo}`;
  document.querySelector("#resultado-pedido-invertido").innerText = `${monto/monto} ${divisaBase} = ${(montoResultado/monto).toFixed(2)} ${divisaObjetivo}`;
};

export function ocultarTextosResultados(){
  document.querySelector("#resultado-pedido").innerText = "";
  document.querySelector("#resultado-pedido-invertido").innerText = "";
}

export function actualizarTextoDivisa(listaDeDivisa,texto){
  const LISTA_DIVISAS_DE = document.querySelector("#lista-divisas-de");
  const LISTA_DIVISAS_A = document.querySelector("#lista-divisas-a");
  if(listaDeDivisa === LISTA_DIVISAS_A.id){
    document.querySelector("#divisa-base").innerText = texto;
    document.querySelector("#divisa-base").dataset.divisa = texto;
  }
  else if(listaDeDivisa === LISTA_DIVISAS_DE.id){
    document.querySelector("#divisa-conversion").innerText = texto;
    document.querySelector("#divisa-conversion").dataset.divisa = texto;
  }
};
