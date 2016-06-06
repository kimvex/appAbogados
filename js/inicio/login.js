import $ from 'jquery';

var login = ()=>{

  function iniciar(e){
    const usuario = document.getElementById('usuario').value,
        pass    = document.getElementById('pass').value;

        if(usuario == "usuario"){
          if(pass == 'usuario123'){
            window.location = 'clientes.html';
          }
        }

    e.preventDefault();
  }

  function logAb(e){

    const usuario = $('#usuario-abogado').val();
    const pass = document.getElementById('passA').value;
    console.log(usuario + pass);
    if(usuario == 'admin'){    
      if(pass == 'admin123'){
        window.location = 'abogados-perfil.html';
      }else{
        $('#err-abogado').html('Contraseña incorrecta');
      }
    }else{
      $('#err-abogado').html('Correo incorrecto');
    }

    e.preventDefault();
  }

  $('#login-abogado').submit(logAb);

  $("#login").submit(iniciar);
}

export default login;
