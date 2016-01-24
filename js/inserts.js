//declarar arreglos para almacenar los objetos
var Estrellas = [],
	Planetas = [],
	Satelites = [],
	PEspaciales = [],
	Misiones = [];
//esconde los formularios de insercion de los 3 c.celestes
var hideAllcc = function () {
	$('#form-estrella').hide();
	$('#form-planeta').hide();
	$('#form-satelite').hide();
};

var cagarSelectPlanetas = function () {
	var sPlanetas = $('#listid');//carga el select de planetas
	//remueve todas las opciones precargadas
	sPlanetas.empty();
	//invoca funcion que actualiza el select
	Planetas.forEach(function(_unPlaneta, i) {
		var opt = $("<option></option>").attr("value", _unPlaneta.getNombre());
		sPlanetas.append(opt);
		console.log(">>option agregada a select de planetas");
	});
};

$(document).ready(function(){
	console.log('>>inserts in!');
	hideAllcc();
	//--invocar función de validación de inputs--

	//listener del botón para abrir formulario de registro de estrellas
	$('#btn-estrella').on('click', function () {
		hideAllcc();
		$('#form-estrella').show('slow');
	});
	//listener del botón para abrir formulario de registro de planetas
	$('#btn-PLaneta').on('click', function () {
		hideAllcc();
		$('#form-planeta').show('slow');
	});
	//listener del botón para abrir formulario de registro de satélites
	$('#btn-satelite').on('click', function () {
		//valida que exista planetas
		if(Planetas.length>0){
			hideAllcc();
			//abrir formulario
			$('#form-satelite').show('slow');
			//refresca las opciones del select de planetas
			cagarSelectPlanetas();
			console.log(">>hola");
		} else {
			alert("No se pueden registrar satélites, debe registrar primero un planeta");
		}
	});


	console.log('>>inserts out');
});