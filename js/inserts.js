//declarar arreglos para almacenar los objetos
var Estrellas = [],	Planetas = [],	Satelites = [],	PEspaciales = [],	Misiones = [];
//esconde los formularios de inserción de los 3 cuerpos celestes
var hideAllcc = function () {
	$('#form-estrella').hide();
	$('#form-planeta').hide();
	$('#form-satelite').hide();
	$('#tabla-estrellas').hide();
	$('#tabla-planetas').hide();
	$('#tabla-satelites').hide();
};
//añade options a la lista desplegable de planetas
var cagarSelectPlanetas = function () {
	var sPlanetas = $('#listid');//carga lista de planetas
	//remueve todas las opciones precargadas en la lista
	sPlanetas.empty();
	//invoca función que actualiza la lista
	Planetas.forEach(function(_unPlaneta, i) {
		var opt = $("<option></option>").attr("value", _unPlaneta.getNombre());
		sPlanetas.append(opt);
		console.log(">>opción agregada a select de planetas");
	});
};
//=======================================================================
$(document).ready(function(){
	console.log('>>inserts in!');
	hideAllcc();
		$('#tbl-misiones').hide();		
		$('#tbl-programas').hide();
		$('#tbl-misiones').hide();		
		$('#tbl-programas').hide();
	//--invocar función de validación de inputs--

	//listener: botón "abrir" form de registro de estrellas
	$('#btn-estrella').on('click', function () {
		hideAllcc();
		$('#form-estrella').show('slow');
		console.log('entró al fomulario para registro de estrellas');
	});

	//listener: botón "abrir" tabla de estrellas
	$('#btn-listasEtrellas').on('click', function () {
		hideAllcc();
		$('#tabla-estrellas').show('slow');
		console.log('entró a la tabla de estrellas');
	});

	//listener: botón "abrir" form de registro de planetas
	$('#btn-PLaneta').on('click', function () {
		hideAllcc();
		$('#form-planeta').show('slow');
		console.log('entró al fomulario para registro de planetas');
	});

	//listener: botón "abrir" tabla de planetas
	$('#btn-listasPLaneta').on('click', function () {
		hideAllcc();
		$('#tabla-planetas').show('slow');
		console.log('mostro la tabla de  planetas');
	});

	//listener: botón "abrir" form de registro de satélites
	$('#btn-satelite').on('click', function () {
		//Antes de abrir el form se valida que exista almenos un planeta
		if(Planetas.length>0){//si existe almenos 1
			hideAllcc();
			//abrir form
			$('#form-satelite').show('slow');
			console.log('entró al fomulario para registro de satélites');
			//refresca las opciones del select de planetas
			cagarSelectPlanetas();
			console.log(">>cargó la lista desplegable de planetas");
		} else {
			alert("No se pueden registrar satélites, debe registrar primero un planeta");
		}
	});
	//listener: botón "abrir" tabla de satélites
	$('#btn-listasSatelite').on('click', function () {
		hideAllcc();
		$('#tabla-satelites').show('slow');
		console.log('Mostro la tabla de Satelites');
	});


	//listener: botón "abrir" tabla de misiones
	$('#btn-listaMisiones').on('click', function () {
	    $('#tbl-programas').hide();
		$('#tbl-misiones').show('slow');
		console.log('mostro la tabla de  misiones');
	});

	//listener: botón "abrir" tabla de programas
	$('#btn-listaProgramas').on('click', function () {
		$('#tbl-misiones').hide();		
		$('#tbl-programas').show('slow');
		console.log('mostro la tabla de  misiones');
	});











	//listener: botón insertar estrellas
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
			existe = false;//bandera para validación
		//2) verificar si existe la estrella
		//3) insertar nueva estrella
		if(!existe) {//crea el objeto únicamente si cumple con las validaciones
			newEstrella = new Estrella(nomb, masa, temp, dura, edad, comp, intLum, tama);
			Estrellas.push(newEstrella);
			console.log(">>Estrella creada");
		}
	});

	//listener: botón insertar planetas
	$('#reg-PLaneta').on('click', function () {
		//1) capturar inputs
		var nomb = $('#inp-planeta-nombre').val(),
			temp = $('#inp-planeta-temp').val(),
			masa = $('#inp-planeta-masa').val(),
			dura = $('#inp-planeta-durDia').val(),
			diMeSo = $('#inp-planeta-distancia').val(),
			duAnno = $('#inp-planeta-durAnno').val(),
			existe = false;
		//2) verificar si existe el planeta
		//3) insertar nuevo planeta
		if(!existe) {
			newPlaneta = new Planeta(nomb, masa, temp, dura, diMeSo, duAnno);
			Planetas.push(newPlaneta);
			console.log(">>Planeta creado");
		}
	});

	//listener: botón insertar satélites
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
		//3) insertar nuevo satélite
		if(!existe) {
			newSatelite = new Satelite(nomb, masa, temp, dura, dimeSC, caPrin, planeta);
			Satelites.push(newSatelite);
			console.log(">>Satélite creado");
			console.log(Planetas.length);

			//4) agregar satélite al planeta
			Planetas.forEach(function(_unPla, i) {
				console.log("entroalforeach");
		    	if(_unPla.getNombre() == planeta){
					console.log("entró a el if");
					_unPla.agregarSatelite(newSatelite);
				}
			});
						//no está funcionando la inserción de satelite a planeta
						/*for (i = 0; i >= Planetas.length; i++){
							if(Planetas[i]===planeta){
								console.log("En Planetas[] existe uno llamado"+ planeta );
								Planetas[i].agregarSatelite(newSatelite);
								i=Planetas.length;//termina el ciclo
							}
						}*/
		}//fin3)
	});

	//listener del botón insertar p.espaciales
	$('#reg-Programa').on('click', function () {
		//1) capturar inputs
		var nomb = $('#inp-prog-nombre').val(),
			fIni = $('#inp-prog-fecha').val(),
			fFin = $('#inp-prog-feFinal').val(),
			alca = $('#inp-prog-alcance').val(),
			existe=false;
		//2) verificar si existe el p.espacial
		//3) insertar nueva p.espacial
		if(!existe) {//crea el objeto únicamente si cumple con las validaciones
			newPrograma = new ProgramaEspacial(nomb, fIni, fFin, alca);
			PEspaciales.push(newPrograma);
			console.log(">>Programa espacial creado");
		}
	});

	//listener del botón insertar misiones
	$('#reg-Mision').on('click', function () {
		//1) capturar inputs
		var nomb = $('#inp-misi-nombre').val(),
			trip = $('#inp-misi-tripu').val(),
			fLan = $('#inp-misi-fecha').val(),
			dura = $('#inp-misi-duracion').val(),
			dInt = $('#inp-misi-datos').val(),
			insi = $('#inp-misi-insignia').val(),
			resu = $('#inp-misi-resultado').val(),
			nave = $('#inp-misi-nave').val(),
			existe=false;
			console.log("entró antes de del FEach");
		//2) verificar si existe la misión 
		//3) insertar nueva misión
		if(!existe) {//crea el objeto únicamente si cumple con las validaciones
			newMision = new Mision(nomb, trip, fLan, dura, dInt, insi, resu, nave);
			Misiones.push(newMision);
			console.log(">>Misión creada");
		}
	});
	
	console.log('>>inserts out');
});