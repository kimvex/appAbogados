import $ from 'jquery';
import abogCita from './solicitudes';

var aboga = ()=>{

	if(localStorage['lugar'] == 'abogados'){

		function casosAbogados(e){	
			$.get('casos-abogados.html',function(dato){
				document.getElementById('contenido-abogado').innerHTML = dato;
			});
			e.preventDefault();
		}

		function solicitud(e){	
			$.get('solicitudes.html',function(dato){
				document.getElementById('contenido-abogado').innerHTML = dato;
			  abogCita();
			});
			e.preventDefault();
		}	
		function informacionAbogado(e){	
			$.get('informacion-abogados.html',function(dato){
				document.getElementById('contenido-abogado').innerHTML = dato;
			});
			e.preventDefault();
		}	
		function nuevoAbogado(e){	
			$.get('nuevo-abogado.html',function(dato){
				document.getElementById('contenido-abogado').innerHTML = dato;
			});
			e.preventDefault();
		}

	   $("#informacion-abogado").click(informacionAbogado);
	   $("#casos").click(casosAbogados);
	   $("#solicitud-abogado").click(solicitud);
	   $("#registro-abogado").click(nuevoAbogado);

		$.get('informacion-abogados.html',function(dato){
			document.getElementById('contenido-abogado').innerHTML = dato;
		});

		console.log("dfsf");
	}
}

export default aboga;
