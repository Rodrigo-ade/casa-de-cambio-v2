
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

export function mostrarListadoDivisas(simbolos, simboloBaseSeleccionadoCallback = () => {}){
  const LISTA_DIVISAS_DE = document.querySelector("#lista-divisas-de");
  const LISTA_DIVISAS_A = document.querySelector("#lista-divisas-a");
  document.querySelector("#lista-divisas-de li").classList.add("oculto");
  document.querySelector("#lista-divisas-a li").classList.add("oculto");

  Object.keys(simbolos).forEach((simbolo) => {
    const $contenedor_divisa = document.createElement("li");
    const $divisa_link = document.createElement("a");
    $divisa_link.classList.add("dropdown-item");
    $divisa_link.href = "#";
    $divisa_link.dataset.divisa = `${simbolo}`;
    $divisa_link.textContent = `${simbolo}: ${simbolos[simbolo]}`;

    $contenedor_divisa.appendChild($divisa_link);

    let simboloDivisa = `${simbolo}`;
    let listaDeDivisa = LISTA_DIVISAS_A.id;

    $divisa_link.onclick = () => simboloBaseSeleccionadoCallback(simboloDivisa, listaDeDivisa);

    LISTA_DIVISAS_DE.appendChild($contenedor_divisa);
    LISTA_DIVISAS_A.appendChild($contenedor_divisa.cloneNode(true));
  })

  document.querySelectorAll("#lista-divisas-a a").forEach(($divisa) => {
    let simboloDivisa = $divisa.dataset.divisa;
    let listaDeDivisa = LISTA_DIVISAS_DE.id
    $divisa.onclick = () => simboloBaseSeleccionadoCallback(simboloDivisa,listaDeDivisa);
  })
};

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
