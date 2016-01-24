<<<<<<< HEAD
//Validaciones Form Estrella

var validateInputs = function () {
  var result = true,
    $inputNombre = $('#inp-estrella-nombre'),
    $inputTemperatura = $('#inp-estrella-temp'),
    $inputEdad = $('#inp-estrella-edad');
    $inputIntensidad = $('#inp-estrella-luminosidad'),
    $inputMasa= $('#inp-estrella-masa'),
    $inputDuracion = $('#inp-estrella-duracion'),
    $inputComposicion = $('#inp-estrella-comp'),
    $inputTamaño = $('#inp-estrella-tam'),

  $('.form-group').removeClass('has-error');
=======
var validateInputs = function() {
  var result = true;
  //Formularios

  //Estrella
  var $inputEstrellaNombre = $('#inp-estrella-nombre');
  var $inputEstrellaTemp = $('#inp-estrella-temp');
  var $inputEstrellaEdad = $('#inp-estrella-edad');
  var $inputEstrellaLuminosidad = $('#inp-estrella-luminosidad');
  var $inputEstrellaMasa = $('#inp-estrella-masa');
  var $inputEstrellaDuracion = $('#inp-estrella-duracion');
  var $inputEstrellaComp = $('#inp-estrella-comp');
  var $inputEstrellaTam = $('#inp-estrella-tam');
  ;



  $('.form-group').removeClass('has-error');
  
  //Estrella
  if (!$inputEstrellaNombre.val()) {
    $inputEstrellaNombre.closest('.form-group').addClass('has-error');
    result =false;
  }

  if (!$inputEstrellaTemp.val()) {
    $inputEstrellaTemp.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputEstrellaEdad.val()) {
    $inputEstrellaEdad.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputEstrellaLuminosidad.val()) {
    $inputEstrellaLuminosidad.closest('.form-group').addClass('has-error');
    result = false;
  }
>>>>>>> c048ce6a97920d3901a18d219cfd67d2ec1bf876

  if (!/^[a-zA-Z]+$/.test($inputNombre.val())) {
    $inputNombre.closest('.form-group').addClass('has-error');
    result = false;
  }

   if (!/^[0-9]+$/.test($inputTemperatura.val())) {
    $inputTemperatura.closest('.form-group').addClass('has-error');
    result = false;
  }

   if (!/^[0-9]+$/.test($inputEdad.val())) {
    $inputEdad.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!/^[0-9]+$/.test($inputIntensidad.val())) {
    $inputIntensidad.closest('.form-group').addClass('has-error');
    result = false;
  }

<<<<<<< HEAD
  if (!/^[0-9]+$/.test($inputMasa.val())) {
    $inputMasa.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!/^[0-9]+$/.test($inputDuracion.val())) {
    $inputDuracion.closest('.form-group').addClass('has-error');
    result = false;
  }

   if (!/[A-Za-z0-9_]/.test($inputComposicion.val())) {
    $inputComposicion.closest('.form-group').addClass('has-error');
    result = false;
  }

   if (!/^[0-9]+$/.test($inputTamaño.val())) {
    $inputTamaño.closest('.form-group').addClass('has-error');
    result = false;
  }

  return result;
};
=======
  return result;
};




$('document').ready(function() {
  $('input').on('blur', function() { //para todos los inputs y textareas
    validateInputs();
  });
});
>>>>>>> c048ce6a97920d3901a18d219cfd67d2ec1bf876
