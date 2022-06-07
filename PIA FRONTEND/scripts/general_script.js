const hamburguer = document.getElementById('hamburguer')
hamburguer.addEventListener('click', toggleMenu)

function toggleMenu() {
  let menu = document.getElementById('menu')
  menu.hidden=!menu.hidden
  console.log(menu.hidden)
}

function turnLogBox(name) {
  let logbox = document.getElementById('log_box')
  logbox.hidden=false
  
  document.getElementById('log_msg').innerHTML = "Hola de nuevo " + name.nombre
}

let usuario = localStorage.getItem('active_user')

if(usuario != null) {
  usuario = JSON.parse(usuario)
  console.log('usuario activo: ',usuario);
  turnLogBox(usuario)
}

function register() {
  let nombre = document.getElementById('nombre').value
  let telefono = document.getElementById('telefono').value
  let correo = document.getElementById('correo').value
  let password = document.getElementById('password').value

  let user = [{
    nombre: nombre, 
    telefono: telefono, 
    correo: correo, 
    password: password
  }]

  let retrieved_user = JSON.parse(localStorage.getItem('user'))
  
  if(retrieved_user == null) {
    localStorage.setItem('user',JSON.stringify(user))
  }
  else {
    user.push(...retrieved_user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  //localStorage.removeItem('user')
  login()
  window.location.replace("./index.html")
}

function login() {
  let user = localStorage.getItem('user')
  
  if(user == null) {
    console.log('No se encontro al usuario')
    return
  }

  let _correo = document.getElementById('correo').value
  let _password = document.getElementById('password').value

  let user_list = JSON.parse(user)

  user_list.forEach(el => {
    if (el.correo == _correo && el.password == _password) {
      user_active = el
    }
  });

  let usuario = localStorage.getItem('active_user')
  if(usuario != null) {
    localStorage.removeItem('active_user')
  }

  localStorage.setItem('active_user', JSON.stringify(user_active))
  console.log('LOGIN EXITOSO');
  window.location.replace("./index.html")
}

function aHome() {
  window.location.replace("./index.html")
}