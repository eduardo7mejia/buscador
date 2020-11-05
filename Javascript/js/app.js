// console.log(autos);
//Variables 
const max = new Date().getFullYear();
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');

const min = max - 10;

// Generrar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
}
//cargar html (eventos)
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);//muestra los autos al cargar
    //llenar las opciones del año 
    llenarSelect();
});

//EventListener para los formularios de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});


/**Mostrar todos los autos que tenemos */
function mostrarAutos(autos) {
    //Elimina el HTML previo
    limpiarHTML();
    autos.forEach( auto => {
        const  {marca, modelo, year, puertas, transmision, precio, color,sexo} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
        ${marca} ${modelo} -${year} - ${puertas} - Puertas - Transmision: ${transmision} - Precio: ${precio} - Color ${color} Sexo: ${sexo}`;
        //Ingresar el html
        resultado.appendChild(autoHTML);
    });
}

//Limpiar HTML 
function limpiarHTML() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}
//Generar los años del select
function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion  =  document.createElement('option');
        opcion.value= i;
        opcion.textContent = i;
        year.appendChild(opcion);  //Agregar las aopcoines del añ select
    }
}
//función que que filtra en base a la busqueda 
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca);
    mostrarAutos(resultado);
}

//Funcion para seleccionar por marca 
function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}