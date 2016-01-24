//Validaciones Estrella

var validateInputs = function () {
  var result = true,
    $inputNombreSat = $('#inp-sate-nombre'),
    $inputMasaSat = $('#inp-sate-masa');
    $inputDuracionSat = $('#inp-sate-duracion'),
    $inputTemperaturaSat = $('#inp-sate-temp'),
    $inputDistanciaSat = $('#inp-sate-dist'),
    $inputPlanetaPertSat= $('#inp-sate-pert'),
    $inputCaractSat = $('#inp-sate-caract'),

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

  if (!/^[a-zA-Z]+$/.test($inputNombreSat.val())) {
    $inputNombreSat.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!/^[0-9]+$/.test($inputMasaSat.val())) {
    $inputMasaSat.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!/^[0-9]+$/.test($inputDuracionSat.val())) {
    $inputDuracionSat.closest('.form-group').addClass('has-error');
    result = false;
  }

   if (!/^[0-9]+$/.test($inputDistanciaSat.val())) {
    $inputDistanciaSat.closest('.form-group').addClass('has-error');
    result = false;
  }

   if (!/^[a-zA-Z]+$/.test($inputPlanetaPertSat.val())) {
    $inputPlanetaPertSat.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!/[A-Za-z0-9_]/.test($inputCaractSat.val())) {
    $inputCaractSat.closest('.form-group').addClass('has-error');
    result = false;
  }

  return result;
};

<<<<<<< HEAD

//Validaciones Form Planetas  

var validateInputs = function () {
  var result = true,
    $inputNombre = $('#inp-planeta-nombre'),
    $inputTemperatura = $('#inp-planeta-temp'),
    $inputDistancia = $('#inp-planeta-distancia');
    $inputMasa= $('#inp-planeta-masa'),
    $inputDuracionDia = $('#inp-planeta-durDia'),
    $inputDuracionAnno = $('#inp-planeta-durAnno');

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
    $inputMasa.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!/^[0-9]+$/.test($inputMasa.val())) {
    $inputDuracionDia.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!/^[0-9]+$/.test($inputDuracion.val())) {
    $inputDuracionAnno.closest('.form-group').addClass('has-error');
    result = false;
  }


  return result;
};
=======
>>>>>>> 6bab4893f8f6e912f8eb4aeac1524f79c3842ba9
