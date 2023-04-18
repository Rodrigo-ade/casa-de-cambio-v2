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
