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

//Validaciones Form Satelite 

var validateInputs = function () {
  var result = true,
    $inputNombre = $('#inp-sate-nombre'),
    $inputTemperatura = $('#inp-sate-temp'),
    $inputDistancia = $('#inp-sate-dist');
    $inputMasa= $('#inp-sate-masa'),
    $inputDuracion = $('#inp-sate-duracion'),
    $inputComposicion = $('#inp-sate-comp'),
    $inputTamaño = $('#inp-sate-tam'),

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