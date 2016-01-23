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

  if (!$inputEstrellaMasa.val()) {
    $inputEstrellaMasa.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputEstrellaDuracion.val()) {
    $inputEstrellaDuracion.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputEstrellaComp.val()) {
    $inputEstrellaComp.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputEstrellaTam.val()) {
    $inputEstrellaTam.closest('.form-group').addClass('has-error');
    result = false;
  }

  return result;
};




$('document').ready(function() {
  $('input').on('blur', function() { //para todos los inputs y textareas
    validateInputs();
  });
});
