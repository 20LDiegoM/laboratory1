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
  //Planeta
  var $inputPlanetaNombre = $('#inp-planeta-nombre');
  var $inputPlanetaTemp = $('#inp-planeta-temp');
  var $inputPlanetaDistancia = $('#inp-planeta-distancia');
  //var $inputPlanetaSat = $('#inp-planeta-sat');
  var $inputPlanetaMasa = $('#inp-planeta-masa');
  var $inputPlanetaDurDia = $('#inp-planeta-durDia');
  var $inputPlanetaDurAnno = $('#inp-planeta-durAnno');
  //Satelites
  var $inputSateNombre = $('#inp-sate-nombre');
  var $inputSateTemp = $('#inp-sate-temp');
  var $inputSateDist = $('#inp-sate-dist');
  var $inputSatePlaneta = $('#inp-sate-planeta');
  var $inputSateMasa = $('#inp-sate-masa');
  var $inputSateDuracion = $('#inp-sate-duracion');
  var $inputSateCaract = $('#inp-sate-caract'); //Textarea
  //Programa
  var $inputProgNombre = $('#inp-prog-nombre');
  var $inputProgFecha = $('#inp-prog-fecha');
  var $inputProgAlcance = $('#inp-prog-alcance');
  var $inputProgMision = $('#inp-prog-mision');
  var $inputProgFeFinal = $('#inp-prog-feFinal');
  //Misiones
  var $inputMisiNombre = $('#inp-misi-nombre');
  var $inputMisiFecha = $('#inp-misi-fecha');
  var $inputMisiInsignia = $('#inp-misi-insignia');
  var $inputMisiCuerpo = $('#inp-misi-cuerpo');
  var $inputMisiDatos = $('#inp-misi-datos'); //Textarea
  var $inputMisiTripu = $('#inp-misi-tripu');
  var $inputMisiDuracion = $('#inp-misi-duracion');
  var $inputMisiResultado = $('#inp-misi-resultado');
  var $inputMisiNave = $('#inp-misi-nave');



  $('.form-group').removeClass('has-error');
  //Estrella
  if (!$inputEstrellaNombre.val()) {
    $inputEstrellaNombre.closest('.form-group').addClass('has-error');
    result = false;
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

//Planeta

	if (!$inputPlanetaNombre.val()) {
    $inputPlanetaNombre.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputPlanetaTemp.val()) {
    $inputPlanetaTemp.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputPlanetaDistancia.val()) {
    $inputPlanetaDistancia.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputPlanetaSat.val()) {
    $inputPlanetaSat.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputPlanetaMasa.val()) {
    $inputPlanetaMasa.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputPlanetaDurDia.val()) {
    $inputPlanetaDurDia.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputPlanetaDurAnno.val()) {
    $inputPlanetaDurAnno.closest('.form-group').addClass('has-error');
    result = false;
  }

//Satelites

	 if (!$inputSateNombre.val()) {
    $inputSateNombre.closest('.form-group').addClass('has-error');
    result = false;
  }

   if (!$inputSateTemp.val()) {
    $inputSateTemp.closest('.form-group').addClass('has-error');
    result = false;
  }


 if (!$inputSateDist.val()) {
    $inputSateDist.closest('.form-group').addClass('has-error');
    result = false;
  }

   if (!$inputSatePlaneta.val()) {
    $inputSatePlaneta.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputSateMasa.val()) {
    $inputSateMasa.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputSateDuracion.val()) {
    $inputSateDuracion.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputSateCaract.val()) {
    $inputSateCaract.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputSateNombre.val()) {
    $inputSateNombre.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputSateNombre.val()) {
    $inputSateNombre.closest('.form-group').addClass('has-error');
    result = false;
  }


//Programa

	if (!$inputProgNombre.val()) {
    $inputProgNombre.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputProgFecha.val()) {
    $inputProgFecha.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputProgAlcance.val()) {
    $inputProgAlcance.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputProgMision.val()) {
    $inputProgMision.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputProgFeFinal.val()) {
    $inputProgFeFinal.closest('.form-group').addClass('has-error');
    result = false;
  }

  //Misiones

	if (!$inputMisiNombre.val()) {
    $inputMisiNombre.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputMisiFecha.val()) {
    $inputMisiFecha.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputMisiInsignia.val()) {
    $inputMisiInsignia.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputMisiCuerpo.val()) {
    $inputMisiCuerpo.closest('.form-group').addClass('has-error');
    result = false;
  }

  if (!$inputMisiDatos.val()) {
    $inputMisiDatos.closest('.form-group').addClass('has-error');
    result = false;
  }


if (!$inputMisiTripu.val()) {
    $inputMisiTripu.closest('.form-group').addClass('has-error');
    result = false;
  }

if (!$inputMisiDuracion.val()) {
    $inputMisiDuracion.closest('.form-group').addClass('has-error');
    result = false;
  }

if (!$inputMisiResultado.val()) {
    $inputMisiResultado.closest('.form-group').addClass('has-error');
    result = false;
  }

if (!$inputMisiNave.val()) {
    $inputMisiNave.closest('.form-group').addClass('has-error');
    result = false;
  }



$(document).ready(function() {
  $('input, textarea').on('blur', function() { //para todos los inputs y textareas
    validateInputs();
  });
});
