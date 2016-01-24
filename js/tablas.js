$('document').ready(function () {

  //listener: despliega información en la tabla de Estrellas
  $('#btn-listasEtrellas').on('click',function(){

    //recorre cada una de las estrellas
    Estrellas.forEach(function(_unaEstrella, i) {
      //crea una nueva fila <tr> con toda la infomación (cada <td>) de la estrella actual (_unaEstrella[i])
      nuevaFila = '<tr>';
      nuevaFila += '<td>' + _unaEstrella[i].getNombre() + '</td>';
      nuevaFila += '<td>' + _unaEstrella[i].getMasa() + '</td>';
      nuevaFila += '<td>' + _unaEstrella[i].getTamano() + '</td>';
      nuevaFila += '<td>' + _unaEstrella[i].getEdad() + '</td>';
      nuevaFila += '<td>' + _unaEstrella[i].getComposicion() + '</td>'; 
      nuevaFila += '<td>' + _unaEstrella[i].getTemMedia() + '</td>';
      nuevaFila += '<td>' + _unaEstrella[i].getDuracionDia() + '</td>';
      nuevaFila += '<td>' + _unaEstrella[i].getIntLuminica() + '</td>';
      nuevaFila += '</tr>';
      //agrega la fila nueva al cuerpo de la tabla
      $('#tabla-estrellas tbody').append(nuevaFila);
    });

  });//cierre tabla estrellas

  //Tabla de Satelites
  $('#btn-listasSatelite').on('click',function(){

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
  });//cierre tabla satélites

  $('btn-listasPLaneta').on('click',function(){

    nuevaFila = '<tr>';
    nuevaFila += '<td>' + valNombre + '</td>';
    nuevaFila += '<td>' + valMasa + '</td>';
    nuevaFila += '<td>' + valTemperatura + '</td>';
    nuevaFila += '<td>' + valDuracion + '</td>';
    nuevaFila += '<td>' + valDuracionAnno + '</td>'; 
    nuevaFila += '<td>' + valDistancia + '</td>';
    nuevaFila += '</tr>';

    $('#tabla-planetas tbody').append(nuevaFila);
  });//cierre tabla planetas

});//fin ready