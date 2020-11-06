// console.log(autos);
//Variables
const max = new Date().getFullYear();
const resultado = document.querySelector("#resultado");
const year = document.querySelector("#year");
const marca = document.querySelector("#marca");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const sexo = document.querySelector("#sexo");
const min = max - 10;

// Generrar un objeto con la busqueda
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
  sexo: "",
};
//cargar html (eventos)
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos); //muestra los autos al cargar
  //llenar las opciones del año
  llenarSelect();
});

//EventListener para los formularios de busqueda
marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
  filtrarAuto();
});
year.addEventListener("change", (e) => {
  datosBusqueda.year = parseInt(e.target.value);
  filtrarAuto();
});
minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
  filtrarAuto();
});
maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
  filtrarAuto();
});
puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = parseInt(e.target.value);
  filtrarAuto();
});
transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
  filtrarAuto();
});
color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
  filtrarAuto();
});
sexo.addEventListener("change", (e) => {
  datosBusqueda.sexo = e.target.value;
  filtrarAuto();
});
/**Mostrar todos los autos que tenemos */
function mostrarAutos(autos) {
  //Elimina el HTML previo
  limpiarHTML();
  autos.forEach((auto) => {
    const {
      marca,
      modelo,
      year,
      puertas,
      transmision,
      precio,
      color,
      sexo,
    } = auto;
    const autoHTML = document.createElement("p");
    autoHTML.textContent = `
        ${marca} ${modelo} -${year} - ${puertas} - Puertas - Transmision: ${transmision} - Precio: ${precio} - Color ${color} Sexo: ${sexo}`;
    //Ingresar el html
    resultado.appendChild(autoHTML);
  });
}

//Limpiar HTML
function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}
//Generar los años del select
function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); //Agregar las aopcoines del añ select
  }
}
//función que que filtra en base a la busqueda
function filtrarAuto() {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor)
    .filter(filtrarSexo);
  if (resultado.length) {
    mostrarAutos(resultado);
  } else{
      noResultado();
  }
}
function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent= 'No hay resultados, Intenta con otro términos de búsqueda';
    resultado.appendChild(noResultado);
}
//Funcion para seleccionar por marca
function filtrarMarca(auto) {
  const { marca } = datosBusqueda;
  if (marca) {
    return auto.marca === marca;
  }
  return auto;
}
//ffucnión para mostrar por año
function filtrarYear(auto) {
  const { year } = datosBusqueda;
  if (year) {
    return auto.year === year;
  }
  return auto;
}
// funcionm para mostrar por precio minimo
function filtrarMinimo(auto) {
  const { minimo } = datosBusqueda;
  if (minimo) {
    return auto.precio >= minimo;
  }
  return auto;
}
//funcion para mostrar por el precio maximo
function filtrarMaximo(auto) {
  const { maximo } = datosBusqueda;
  if (maximo) {
    return auto.precio <= maximo;
  }
  return auto;
}
//funcion para mostrar puertaas
function filtrarPuertas(auto) {
  const { puertas } = datosBusqueda;
  if (puertas) {
    return auto.puertas === puertas;
  }
  return auto;
}
//Transmisión
function filtrarTransmision(auto) {
  const { transmision } = datosBusqueda;
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}
function filtrarColor(auto) {
  const { color } = datosBusqueda;
  if (color) {
    return auto.color === color;
  }
  return auto;
}
function filtrarSexo(auto) {
  const { sexo } = datosBusqueda;
  if (sexo) {
    return auto.sexo === sexo;
  }
  return auto;
}
