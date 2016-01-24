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