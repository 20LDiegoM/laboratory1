var listaPlanetas= [];
var btnRegistrar = document.querySelector('#reg-PLaneta');

btnRegistrar.addEventListener('click',agregarPlaneta);




function agregarPlaneta(){

var sNombre = document.querySelector('#inp-planeta-nombre').value;
var sTemperatura = document.querySelector('#inp-planeta-temp').value;
var nDistancia = document.querySelector('#inp-planeta-distancia').value;
var nMasa= document.querySelector('#inp-planeta-masa');
var nDuracionDia=document.querySelector('#inp-planeta-durDia');
var nDuracionAnno=document.querySelector('#inp-planeta-durAnno');

var objPlaneta = new Planeta (sNombre,sTemperatura,nDistancia,nMasa,nDuracionDia,nDuracionAnno);
listaPlanetas.push(objPlaneta);


}



function llenarTablaPlaneta(){

	
var tablaPlanetas= document.querySelector('.tabla-planetas tbody');
tablaPlanetas.innerHTML="";

for(var i=0;i<listaPlanetas.length;i++){
var fila = document.createElement('tr');



var celdaNombre=document.createElement('td'),
    celdaTemperatura=document.createElement('td'),
    celdaDistancia=document.createElement('td'),
    celdaMasa=document.createElement('td'),
    celdaDuaracionDia=document.createElement('td'),
    celdaDuaracionAnno=document.createElement('td');



var nodoId = document.createTextNode(listaALbunes[i].getId());    
var textoAlbum = document.createTextNode(listaALbunes[i].getNombre());
var textoGenero = document.createTextNode(listaALbunes[i].getGenero());

		var boton = document.createElement('input');
		var boton2 = document.createElement('input');
		boton.type = 'button';
		boton2.type = 'button';
		boton.value = 'Selecionar';
		boton2.value = 'Asignar';

		$(celdaId).append(nodoId);
		$(fila).append(celdaId);
	
		$(celdaTitulo).append(textoAlbum);
		$(fila).append(celdaTitulo);
		
		$(celdaGenero).append(textoGenero);
		$(fila).append(celdaGenero);
	

		$(fila).append(boton);
		$(fila).append(boton2);

		$('#tblAlbunes tbody').append(fila);



}