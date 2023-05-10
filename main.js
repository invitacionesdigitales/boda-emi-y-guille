
const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final-sms');
let boton = document.querySelector("#btn")


boton.addEventListener("click", () => {

    Swal.fire({
      title: '<strong>VER LA UBICACION<u></u></strong>',
      icon: 'success',
      html:
        'INGRESÁ' +
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.6610804541056!2d-68.47369522550642!3d-31.560914674195487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968114d21c65bc53%3A0x24e499f297d8447b!2sQuinta%20El%20Vergel!5e0!3m2!1ses!2sar!4v1683725289391!5m2!1ses!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
        'Podes ampliar el mapa',
        
        
    })
  });


//Fecha a futuro
const countdownDate = new Date('September 30 2023 18:43:30 GMT-0300').getTime();

let interval = setInterval(function(){
//Obtener fecha actual y milisegundos
const now = new Date().getTime();

//Obtener las distancias entre ambas fechas
let distance = countdownDate - now;

//Calculos a dias-horas-minutos-segundos
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

//Escribimos resultados
$days.innerHTML = days;
$hours.innerHTML = hours;
$minutes.innerHTML = minutes;
$seconds.innerHTML = ('0' + seconds).slice(-2);

//Cuando llegue a 0
if(distance < 0){
    clearInterval(interval);
    $finalMessage.style.transform = 'translateY(0)';
}
}, 1000);