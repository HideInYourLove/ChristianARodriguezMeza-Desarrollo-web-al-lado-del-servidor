/* ===== PAGO ===== */
function cambiarTipoPago() {
  const tipo = document.querySelector('input[name="tipoPago"]:checked').value;
  const texto = document.getElementById("tipoTarjetaTexto");

  texto.textContent = tipo === "tdc"
    ? "Datos de Tarjeta de Crédito"
    : "Datos de Tarjeta de Débito";
}

function formatearTarjeta(input){
 let valor = input.value.replace(/\s/g, '').replace(/[^0-9]/g, '');
 let formateo = valor.match(/.{1,4}/g);
 input.value = formateo ? formateo.join(' ') : valor;
}

function formatearFecha(input){
 let valor = input.value.replace(/\D/g, '');
 if(valor.length >= 2){
  input.value = valor.slice(0,2) + '/' + valor.slice(2,4);
 } else {
  input.value = valor;
 }
}

function procesarPago(){
 console.log("=== INICIANDO PROCESO DE PAGO ===");
 
 if(!usuarioActivo){
  console.log("ERROR: No hay usuario activo");
  return toast("Debes iniciar sesión");
 }
 
 console.log("Usuario activo:", usuarioActivo.nombre);
 console.log("Carrito actual:", carrito);
 
 const numTarjeta = document.getElementById("numTarjeta").value;
 const nombreTitular = document.getElementById("nombreTitular").value;
 const fechaExp = document.getElementById("fechaExp").value;
 const cvv = document.getElementById("cvv").value;
 const tipoTarjeta = document.querySelector('input[name="tipoPago"]:checked').value;
 
 console.log("Datos del formulario:", {numTarjeta, nombreTitular, fechaExp, cvv, tipoTarjeta});
 
 // Validaciones
 if(!numTarjeta || !nombreTitular || !fechaExp || !cvv){
  console.log("ERROR: Campos vacíos");
  return toast("Por favor completa todos los campos");
 }
 
 if(numTarjeta.replace(/\s/g, '').length < 13){
  console.log("ERROR: Tarjeta inválida");
  return toast("Número de tarjeta inválido");
 }
 
 if(fechaExp.length !== 5){
  console.log("ERROR: Fecha inválida");
  return toast("Fecha de expiración inválida (MM/AA)");
 }
 
 if(cvv.length < 3){
  console.log("ERROR: CVV inválido");
  return toast("CVV inválido");
 }
 
 // Simular procesamiento
 toast("Procesando pago...");
 console.log("Iniciando simulación de pago...");
 
 setTimeout(() => {
  console.log("=== PROCESANDO PAGO ===");
  
  const subtotal = carrito.reduce((sum, p) => sum + p.precio, 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;
  
  console.log("Cálculos:", {subtotal, iva, total});
  
  // Crear objeto de compra
  const compra = {
   id: Date.now(),
   fecha: new Date().toLocaleString('es-MX'),
   productos: [...carrito],
   subtotal: subtotal,
   iva: iva,
   total: total,
   metodoPago: tipoTarjeta === 'tdc' ? 'Tarjeta de Crédito' : 'Tarjeta de Débito',
   ultimosDigitos: numTarjeta.replace(/\s/g, '').slice(-4)
  };
  
  console.log("Compra creada:", compra);
  
  // Guardar en historial
  if(!usuarioActivo.historial){
   console.log("Inicializando array de historial");
   usuarioActivo.historial = [];
  }
  
  usuarioActivo.historial.push(compra);
  console.log("Historial actualizado:", usuarioActivo.historial);
  
  // Guardar método de pago si no existe
  const ultimosDigitos = numTarjeta.replace(/\s/g, '').slice(-4);
  
  if(!usuarioActivo.metodosGuardados){
   console.log("Inicializando array de métodos guardados");
   usuarioActivo.metodosGuardados = [];
  }
  
  const metodoExiste = usuarioActivo.metodosGuardados.find(m => m.ultimosDigitos === ultimosDigitos);
  
  if(!metodoExiste){
   const nuevoMetodo = {
    tipo: tipoTarjeta === 'tdc' ? 'Crédito' : 'Débito',
    ultimosDigitos: ultimosDigitos,
    titular: nombreTitular,
    fechaExp: fechaExp
   };
   
   usuarioActivo.metodosGuardados.push(nuevoMetodo);
   console.log("Método de pago guardado:", nuevoMetodo);
  } else {
   console.log("Método de pago ya existe");
  }
  
  console.log("Métodos guardados:", usuarioActivo.metodosGuardados);
  console.log("Usuario completo después del pago:", usuarioActivo);
  
  toast("✅ ¡Pago exitoso! Total: $" + total.toLocaleString() + " MXN");
  
  // Vaciar carrito
  carrito = [];
  actualizarContador();
  console.log("Carrito vaciado");
  
  // Limpiar formulario
  document.getElementById("numTarjeta").value = "";
  document.getElementById("nombreTitular").value = "";
  document.getElementById("fechaExp").value = "";
  document.getElementById("cvv").value = "";
  
  setTimeout(() => {
   console.log("Redirigiendo al catálogo...");
   mostrar("catalogo");
  }, 2000);
 }, 1500);
}