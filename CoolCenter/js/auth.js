/* ===== AUTH ===== */
let usuarios = [];
let usuarioActivo = null;

function hash(t){ return btoa(t); }

function registrar(){
  if(!regNombre.value||!regEmail.value||!regPass.value)
    return toast("Todos los campos son obligatorios");
  
  if(usuarios.find(u => u.email === regEmail.value)){
    return toast("Este email ya está registrado");
  }
  
  usuarios.push({
    nombre: regNombre.value,
    email: regEmail.value,
    pass: hash(regPass.value),
    foto: "",
    historial: [],
    metodosGuardados: []
  });
  
  toast("Registro exitoso");
  mostrar("login");
}

function login(){
  let u = usuarios.find(u=>u.email==loginEmail.value && u.pass==hash(loginPass.value));
  if(!u) return toast("Credenciales incorrectas");
  usuarioActivo = u;
  document.getElementById("logoutBtn").classList.remove("hidden");
  document.getElementById("perfilBtn").classList.remove("hidden");
  document.getElementById("loginLink").classList.add("hidden");
  document.getElementById("registroLink").classList.add("hidden");
  toast("Bienvenido " + u.nombre);
  mostrar("catalogo");
}

function logout(){
  usuarioActivo=null;
  document.getElementById("logoutBtn").classList.add("hidden");
  document.getElementById("perfilBtn").classList.add("hidden");
  document.getElementById("loginLink").classList.remove("hidden");
  document.getElementById("registroLink").classList.remove("hidden");
  toast("Sesión cerrada");
  mostrar("catalogo");
}
