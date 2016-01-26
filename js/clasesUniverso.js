var CuerpoCeleste = function (_nomb, _masa, _temp, _dura) {
  var nombre = _nomb,
      masa = _masa,
      temMedia = _temp,//temperatura media
      duracionDia = _dura;

  this.getNombre = function () {
    return nombre;
  };
  this.getMasa = function () {
    return masa;
  };
  this.getTemMedia = function () {
    return temMedia;
  };
  this.getDuracionDia = function () {
    return duracionDia;
  };
};

var Estrella = function (_nomb, _masa, _temp, _dura, _edad, _comp, _intLum, _tama) {
  CuerpoCeleste.call(this, _nomb, _masa, _temp, _dura);
  //nuevos atributos(4)
  var edad = _edad,
      composicion = _comp,
      intLuminica = _intLum,//intensidad lumínica
      tamano =_tama;

  this.getEdad = function () {
    return edad;
  };
  this.getComposicion = function () {
    return composicion;
  };
  this.getIntLuminica = function () {
    return intLuminica;
  };
  this.getTamano = function () {
    return tamano;
  };
};

var Satelite = function (_nomb, _masa, _temp, _dura, _dimeSC, _caPrin, _planeta) {
  CuerpoCeleste.call(this, _nomb, _masa, _temp, _dura);
  //nuevos atributos(3)
  var dimeSC = _dimeSC,//distancia media entre el satélite y el cuerpo celeste
      carPrincip = _caPrin,//características principales
      planeta = _planeta;//planeta al que pertenece

  this.getDimeSC = function () {
    return dimeSC;
  };
  this.getCarPrincip = function () {
    return carPrincip;
  };
  this.getPlaneta = function () {
    return planeta;
  };
};

var Planeta = function (_nomb, _masa, _temp, _dura, _diMeSo, _duAnno) {
  CuerpoCeleste.call(this, _nomb, _masa, _temp, _dura);
  //nuevos atributos(4), 2 de ellos no son valores de entrada para el constructor
  var disMedSol = _diMeSo,//distancia media del sol
      duracionAnno = _duAnno,
      cantSate = 0;//cantidad de satélites: inicia en 0
      arrSatelites = [];// composición 0-n

  this.getDisMedSol = function () {
    return disMedSol;
  };
  this.getDuracionAnno = function () {
    return duracionAnno;
  };
  this.getCantSate = function () {
    return cantSate;
  };
  this.getSatelites = function () {
    return arrSatelites;
  };
  this.incCantidad = function (){//incrementa el contador de los satélites
    cantSate++;
  };

  //métodos especiales
  this.agregarSatelite = function (unSatelite) {
    if (unSatelite instanceof Satelite) {
      arrSatelites.push(unSatelite);//recibe un objeto
      this.incCantidad();//cada vez que se agrega un satelite se incrementa el contador
    } else {
      console.warn('agregarSatelite: el objeto recibido no es de tipo Satelite.');
    }
  };
};

//Clases que heredan de CuerpoCeleste
Estrella.prototype = new CuerpoCeleste();
Estrella.prototype.constructor = Estrella;
Satelite.prototype = new CuerpoCeleste();
Satelite.prototype.constructor = Satelite;
Planeta.prototype = new CuerpoCeleste();
Planeta.prototype.constructor = Planeta;
//=======================================================================
var Mision = function (_nomb, _trip, _fLan, _dura, _dInt, _insi, _resu, _nave) {
  var nombre = _nomb,
      tripulantes = _trip,
      fechaLan = _fLan,//fecha de lanzamiento
      duracion = _dura,
      datosInte = _dInt,//datos de interés
      insignia = _insi,//guarda la ruta de cada imagen
      result = _resu,
      nave = _nave,
      arrCuerposCel = [],//arreglo de cuerpos celestes destino
      estado = false;//atributo "bandera" para validar si la misión ya fue asignada a 1 p. espacial

  this.getNombre = function () {
    return nombre;
  };
  this.getTripulantes = function () {
    return tripulantes;
  };
  this.getFechaLan = function () {
    return fechaLan;
  };
  this.getDuracion = function () {
    return duracion;
  };
  this.getDatosInte = function () {
    return datosInte;
  };
  this.getInsignia = function () {
    return insignia;
  };
  this.getResultado = function () {
    return result;
  };
  this.getNave = function () {
    return nave;
  };
  this.getCuerposCel = function () {
    return arrCuerposCel;
  };

  //métodos especiales
  this.agregarCuerpoCeleste = function (unCCel) {
    //console.log('el cc recivido se llama: '+unCCel.getNombre());
    if (unCCel instanceof CuerpoCeleste) {
      arrCuerposCel.push(unCCel);//recibe un objeto
    } else {
      console.warn('agregarCuerpoCeleste: el objeto recibido no es de tipo CuerpoCeleste.');
    }
  };
};

var ProgramaEspacial = function (_nomb, _fIni, _fFin, _alca) {
  var nombre = _nomb,
      fechaInicio = _fIni,
      fechaFin = _fFin,//temperatura media
      alcance = _alca,
      arrMisiones = [];

  this.getNombre = function () {
    return nombre;
  };
  this.getFechaInicio = function () {
    return fechaInicio;
  };
  this.getFechaFin = function () {
    return fechaFin;
  };
  this.getAlcance = function () {
    return alcance;
  };
  this.getMisiones = function () {
    return arrMisiones;
  };

  //métodos especiales
  this.agregarMision = function (unaMis) {
    //console.log('la misión recivida se llama: '+unaMis.getNombre());
    if (unaMis instanceof Mision) {
      arrMisiones.push(unaMis);//recibe un objeto
    } else {
      console.warn('agregarMision: el objeto recibido no es de tipo Mision.');
    }
  };
};