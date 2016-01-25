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

      Satelites.forEach(function(_unSatelite, i) {

        nuevaFila = '<tr>';
        nuevaFila += '<td>' + getNombre() + '</td>';
        nuevaFila += '<td>' + getMasa() + '</td>';
        nuevaFila += '<td>' + getDuracionDia() + '</td>'; 
        nuevaFila += '<td>' + getTemMedia() + '</td>';
        nuevaFila += '<td>' + getDimeSC() + '</td>';
        nuevaFila += '<td>' + getPlaneta() + '</td>';
        nuevaFila += '<td>' + getCarPrincip() + '</td>';
        nuevaFila += '</tr>';

        $('#tabla-satelites tbody').append(nuevaFila);
      }); 

    });//cierre tabla satélites

    //Tabla Planetas
    $('btn-listasPLaneta').on('click',function(){

      Planetas.forEach(function(_unPlaneta, i) {

          nuevaFila = '<tr>';
          nuevaFila += '<td>' + getNombre() + '</td>';
          nuevaFila += '<td>' + getMasa() + '</td>';
          nuevaFila += '<td>' + getTemMedia() + '</td>';
          nuevaFila += '<td>' + getDuracionDia() + '</td>';
          nuevaFila += '<td>' + getDuracionAnno() + '</td>'; 
          nuevaFila += '<td>' + getCantSate() + '</td>';
          nuevaFila += '<td>' + getSatelites() + '</td>';
          nuevaFila += '</tr>';

          $('#tabla-planetas tbody').append(nuevaFila);
      });    
        
    });//cierre tabla planetas

});//fin ready