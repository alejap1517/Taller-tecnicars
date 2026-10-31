const carrusel = document.getElementById('carruselServicios');
const btnSiguiente = document.getElementById('btnSiguienteServicios')

btnSiguiente.addEventListener('click', () =>{
    carrusel.scrollBy({ left: 330, behavior: 'smooth'});
});