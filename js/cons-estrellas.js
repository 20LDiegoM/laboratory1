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


$('document').ready(function () {
  $('input').on('blur', function () {
    validateInputs();
  });

  $('#reg-estrella').on('click',function(){
    var nuevaFila, valNombre, valTemperatura, valEdad, valIntensidad, valMasa, valDuracion, valComposicion, valTamaño;

     if (validateInputs()) {
      valNombre = $('#inp-estrella-nombre').val();
      valMasa = $('#inp-estrella-masa').val();
      valTamaño = $('#inp-estrella-tam').val();
      valEdad = $('#inp-estrella-edad').val();
      valComposicion = $('#inp-estrella-comp').val();
      valTemperatura= $('#inp-estrella-temp').val();
      valDuracion = $('#inp-estrella-duracion').val();
      valIntensidad = $('#inp-estrella-luminosidad').val();
    
      nuevaFila = '<tr>';

      nuevaFila += '<td>' + valNombre + '</td>';
      nuevaFila += '<td>' + valTemperatura + '</td>';
      nuevaFila += '<td>' + valEdad + '</td>';
      nuevaFila += '<td>' + valIntensidad + '</td>';
      nuevaFila += '<td>' + valDuracion + '</td>'; 
      nuevaFila += '<td>' + valMasa + '</td>';
      nuevaFila += '<td>' + valComposicion + '</td>';
      nuevaFila += '<td>' + valTamaño + '</td>';    

      nuevaFila += '</tr>';

      $('#tabla-estrellas tbody').append(nuevaFila);

    }
  });

});
