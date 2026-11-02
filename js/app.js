const carrusel = document.getElementById('carruselServicios');
const btnDerecha = document.getElementById('btnDerechaServicios')
const btnIzquierda = document.getElementById('btnIzquierdoServicios')

btnDerecha.addEventListener('click', () =>{
    carrusel.scrollBy({ left: 320, behavior: 'smooth'});
});

btnIzquierda.addEventListener('click', () =>{
    carrusel.scrollBy({ left: -320, behavior: 'smooth'});
});