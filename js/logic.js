//btn ocualtar mostrar formularios
$(document).ready(function(){

	$('#btn-estrella').click(function(){
		$('.form-satelite').hide();
		$('.form-planeta').hide();
		$('.form-estrella').show('slow');

	})

});

$(document).ready(function(){

	$('#btn-PLaneta').click(function(){
		$('.form-satelite').hide();
		$('.form-estrella').hide();
		$('.form-planeta').show('slow');
	})

});

$(document).ready(function(){

	$('#btn-satelite').click(function(){
		$('.form-planeta').hide();
		$('.form-estrella').hide();
		$('.form-satelite').show('slow');
	})

});

//btn ocualtar mostrar listas

$(document).ready(function(){
	$('#btn-listasEtrellas').click(function(){
		$('.tabla-planetas').hide();
		$('.tabla-satelites').hide();
		$('.tabla-estrellas').show('slow');
	})
});

$(document).ready(function(){
	$('#btn-listasPLaneta').click(function(){
		$('.tabla-estrellas').hide();
		$('.tabla-satelites').hide();
		$('.tabla-planetas').show('slow');
	})
});

$(document).ready(function(){
	$('#btn-listasSatelite').click(function(){
		$('.tabla-estrellas').hide();
		$('.tabla-planetas').hide();
		$('.tabla-satelites').show('slow');
	})
});
//;istas misiones o programas
$(document).ready(function(){
	$('#btn-listaMisiones').click(function(){
		$('#tbl-programas').hide();
		$('#tbl-misiones').show('slow');
	})
});

$(document).ready(function(){
	$('#btn-listaProgramas').click(function(){
		$('#tbl-misiones').hide();
		$('#tbl-programas').show('slow');
	})
});