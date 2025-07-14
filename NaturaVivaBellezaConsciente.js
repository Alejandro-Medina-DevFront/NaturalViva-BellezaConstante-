const opiniones = document.querySelectorAll('.opinion')
let indice = 0; 
const botones = document.querySelectorAll('.btn-whatsapp')


setInterval(() => {
    opiniones[indice].classList.remove('activa');
    indice = (indice + 1) % opiniones.length;

    opiniones[indice].classList.add('activa')
}, 7000)

botones.forEach(function(boton){
    boton.addEventListener('click', function(){
        const mensaje = boton.getAttribute('data-mensaje');
        const mensaje_codificado = encodeURIComponent(mensaje);
        const numero = '5356788691';
        const enlace = `https://wa.me/${numero}?text=${mensaje_codificado}`;
        window.open(enlace, '_blank');
 })
})

//AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    mirror: true
});