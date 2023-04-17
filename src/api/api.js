var myHeaders = new Headers();
myHeaders.append("apikey", "xfu84O47Al2oD2A2SneyHTy1nAy9UShg");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const URL_BASE = "https://api.apilayer.com/exchangerates_data/";

export async function obtenerSimbolos(){
  return (await fetch(`${URL_BASE}symbols`, requestOptions)).json();
};

export async function obtenerCambiosMoneda(divisaBase,divisaObjetivo,monto){
  return (await fetch(`${URL_BASE}convert?to=${divisaObjetivo}&from=${divisaBase}&amount=${monto}`, requestOptions)).json();
};
