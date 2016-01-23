$('document').ready(function () {
  $('input').on('blur', function () {
    //validateInputs();
  });

  $('#reg-estrella').on('click',function(){
    var nuevaFila, valNombre, valTemperatura, valEdad, valIntensidad, valMasa, valDuracion, valComposicion, valTamaño;


      valNombre = $('#inp-estrella-nombre').val();
      valTemperatura= $('#inp-estrella-temp').val();
      valEdad = $('#inp-estrella-edad').val();
      valIntensidad = $('#inp-estrella-luminosidad').val();
      valMasa = $('#inp-estrella-masa').val();
      valDuracion = $('#inp-estrella-duracion').val();
      valComposicion = $('#inp-estrella-comp').val();
      valTamaño = $('#inp-estrella-tam').val();

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

   
  });

});
