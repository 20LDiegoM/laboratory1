//Tabla de Estrellas

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

//tabla panetas 




