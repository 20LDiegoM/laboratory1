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

	//listener del botón insertar estrellas
	$('#reg-estrella').on('click', function () {
		//1) capturar inputs
		var nomb = $('#inp-estrella-nombre').val(),
			temp = $('#inp-estrella-temp').val(),
			edad = $('#inp-estrella-edad').val(),
			intLum = $('#inp-estrella-luminosidad').val(),
			masa = $('#inp-estrella-masa').val(),
			dura = $('#inp-estrella-duracion').val(),
			comp = $('#inp-estrella-comp').val(),
			tama = $('#inp-estrella-tam').val(),
			existe = false;//bandera de verificación de estrellas
		//2) verificar si existe la estrella
		Estrellas.forEach(function(_unaEstrella, i) {//recorre todo el arreglo de estrellas
		    if(_unaEstrella.getNombre()===nomb){//si encuentra una estrella con el mismo nombre (no disponible)
				alert("Ya existe una estrella con el nombre: " + nomb);
				existe = true;
			} else {//estrella disponible
				existe = false;
			}
		});
		//3) insertar nueva estrella
		if(!existe) {//crea el objeto únicamente si cumple con las validaciones
			newEstrella = new Estrella(nomb, masa, temp, dura, edad, comp, intLum, tama);
			Estrellas.push(newEstrella);
			console.log(">>Estrella creada");
		}
	});
	

	//listener del botón insertar planetas
	$('#reg-PLaneta').on('click', function () {
		//1) capturar inputs
		var nomb = $('#inp-planeta-nombre').val(),
			temp = $('#inp-planeta-temp').val(),
			masa = $('#inp-planeta-masa').val(),
			dura = $('#inp-planeta-durDia').val(),
			diMeSo = $('#inp-planeta-distancia').val(),
			duAnno = $('#inp-planeta-durAnno').val(),
			existe = false;//bandera de verificación de planetas
		//2) verificar si existe el planeta
		Planetas.forEach(function(_unPlaneta, i) {//recorre todo el arreglo de planetas
		    if(_unPlaneta.getNombre()===nomb){//si encuentra un planeta con el mismo nombre (no disponible)
				alert("Ya existe un planeta con el nombre: " + nomb);
				existe = true;
			} else {//planeta disponible
				existe = false;
			}
		});
		//3) insertar nueva planeta
		if(!existe) {//crea el objeto únicamente si cumple con las validaciones
			newPlaneta = new Planeta(nomb, masa, temp, dura, diMeSo, duAnno);
			Planetas.push(newPlaneta);
			console.log(">>Planeta creado");
		}
	});


	//listener del botón insertar satélites
	$('#reg-satelite').on('click', function () {
		//1) capturar inputs
		var nomb = $('#inp-sate-nombre').val(),
			masa = $('#inp-sate-masa').val(),
			temp = $('#inp-sate-temp').val(),
			dura = $('#inp-sate-duracion').val(),
			dimeSC = $('#inp-sate-dist').val(),
			caPrin = $('#inp-sate-caract').val(),
			planeta = $('#inp-sate-planeta').val(),
			existe = false;//bandera de verificación de satélites
		//2) verificar si existe el satélite
		Satelites.forEach(function(_unSatelite, i) {//recorre todo el arreglo de satélites
		    if(_unSatelite.getNombre()===nomb){//si encuentra un satélite con el mismo nombre (no disponible)
				alert("Ya existe un satélite con el nombre: " + nomb);
				existe = true;
			} else {//satélite disponible
				existe = false;
			}
		});
		//3) insertar nuevo satélite
		if(!existe) {//crea el objeto únicamente si cumple con las validaciones
			newSatelite = new Satelite(nomb, masa, temp, dura, dimeSC, caPrin, planeta);
			Satelites.push(newSatelite);
			console.log(">>Satélite creado");

			//4) agregar satélite al planeta
			for (i = 0; i < Planetas.length; i++){
				if(Planetas[i]===planeta){
					Planetas[i].agregarSatelite(newSatelite)
					i=Planetas.length;//termina el ciclo
				}
			}
		}

		
	});

	console.log('>>inserts out');
});