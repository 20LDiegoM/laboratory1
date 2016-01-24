$('document').ready(function () {
  $('input').on('blur', function () {
    validateInputs();
  });

  //Tabla de Estrellas
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
  });//cierre tabla estrellas

  //Tabla de Satelites
  $('#reg-satelite').on('click',function(){
    var nuevaFila, valNombre, valTemperatura, valCaract, valMasa, valDuracion, valDistancia, valPlanetaPert;

    if (validateInputs()) {
      valMasaSat = $('#inp-sate-masa').val();
      valNombreSat = $('#inp-sate-nombre').val();
      valDuracionSat = $('#inp-sate-duracion').val();
      valTemperaturaSat= $('#inp-sate-temp').val();
      valDistanciaSat = $('#inp-sate-dist').val();
      valPlanetaPertSat = $('#inp-sate-pert').val();
      valCaractSat = $('#inp-sate-caract').val();

      nuevaFila = '<tr>';
      nuevaFila += '<td>' + valNombreSat + '</td>';
      nuevaFila += '<td>' + valMasaSat + '</td>';
      nuevaFila += '<td>' + valDuracionSat + '</td>'; 
      nuevaFila += '<td>' + valTemperaturaSat + '</td>';
      nuevaFila += '<td>' + valDistanciaSat + '</td>';
      nuevaFila += '<td>' + valPlanetaPertSat + '</td>';
      nuevaFila += '<td>' + valCaractSat + '</td>';
      nuevaFila += '</tr>';

      $('#tabla-satelites tbody').append(nuevaFila);
    }
  });//cierre tabla satélites

  $('#reg-PLaneta').on('click',function(){
    var nuevaFila, valNombre, valTemperatura, valDistancia, valMasa, valDuracion, valDuracionAnno, valTamaño;

    if (validateInputs()) {
      valNombre = $('#inp-planeta-nombre').val();
      valMasa = $('#inp-planeta-masa').val();
      valTemperatura = $('#inp-planeta-temp').val();
      valDuracion = $('#inp-planeta-durDia').val();
      valDuracionAnno = $('#inp-planeta-durAnno').val();
      valDistancia= $('#inp-planeta-distancia').val();

      nuevaFila = '<tr>';
      nuevaFila += '<td>' + valNombre + '</td>';
      nuevaFila += '<td>' + valMasa + '</td>';
      nuevaFila += '<td>' + valTemperatura + '</td>';
      nuevaFila += '<td>' + valDuracion + '</td>';
      nuevaFila += '<td>' + valDuracionAnno + '</td>'; 
      nuevaFila += '<td>' + valDistancia + '</td>';
      nuevaFila += '</tr>';

      $('#tabla-planetas tbody').append(nuevaFila);
    }
  });//cierre tabla planetas
  
});