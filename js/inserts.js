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
		PEspaciales.forEach(function(_unPrograma, i) {//recorre todo el arreglo de p.espaciales
		    if(_unPrograma.getNombre()===nomb){//si encuentra un p.espacial con el mismo nombre (no disponible)
				alert("Ya existe un programa espacial con el nombre: " + nomb);
				existe = true;
			} else {//p.espacial disponible
				existe = false;
			}
		});
		//3) insertar nueva p.espacial
		if(!existe) {//crea el objeto únicamente si cumple con las validaciones
			newPrograma = new ProgramaEspacial(nomb, fIni, fFin, alca);
			PEspaciales.push(newPrograma);
			console.log(">>Programa espacial creado");
		}
	});

	//listener del botón insertar p.espaciales
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
		Misiones.forEach(function(_unaMision, i) {//recorre todo el arreglo de misiones
		    if(_unaMision.getNombre()===nomb){//si encuentra una misión con el mismo nombre (no disponible)
				alert("Ya existe una misión con el nombre: " + nomb);
				existe = true;
			} else {//misión disponible
				existe = false;
			}
		});
		//3) insertar nueva misión
		if(!existe) {//crea el objeto únicamente si cumple con las validaciones
			newMision = new Mision(nomb, trip, fLan, dura, dInt, insi, resu, nave);
			Misiones.push(newMision);
			console.log(">>Misión creada");
		}
	});

	console.log('>>inserts out');
});