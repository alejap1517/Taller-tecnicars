const carrusel = document.getElementById('carruselServicios');
const btnDerecha = document.getElementById('btnDerechaServicios')
const btnIzquierda = document.getElementById('btnIzquierdoServicios')

btnDerecha.addEventListener('click', () =>{
    carrusel.scrollBy({ left: 345, behavior: 'smooth'});
});

btnIzquierda.addEventListener('click', () =>{
    carrusel.scrollBy({ left: -345, behavior: 'smooth'});
});

const btnagendamiento = document.getElementById('agenda');

if (btnagendamiento) {
    btnagendamiento.addEventListener('submit', function(evento) {
        evento.preventDefault(); 
        alert('¡Cita agendada con éxito! Nos pondremos en contacto contigo pronto.');
        });
}