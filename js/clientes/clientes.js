import $ from 'jquery';
import cit from '../citas/citas';

var cliente = ()=>{
  if(localStorage['lugar'] == 'perfil'){
    function informacion(e){
      $.get('informacion-personal.html',function(data){
        document.getElementById('contenido-clientes').innerHTML = data;

      });
      e.preventDefault();
    } 
    function casos(e){
      $.get('casos.html',function(data){
        localStorage['lugar-peq'] = "citaaa";
        document.getElementById('contenido-clientes').innerHTML = data;
      });
      e.preventDefault();
    } 
    function citas(e){
      $.get('citas.html',function(data){
        localStorage['lugar-peq'] = "citas";
        document.getElementById('contenido-clientes').innerHTML = data;
        cit();

      });
      e.preventDefault();
    }

    $("#inf-personal").click(informacion);
    $("#casos").click(casos);
    $("#citas").click(citas);

    
    $.get('informacion-personal.html',function(data){
      document.getElementById('contenido-clientes').innerHTML = data;
    });
  }
}

export default cliente;
