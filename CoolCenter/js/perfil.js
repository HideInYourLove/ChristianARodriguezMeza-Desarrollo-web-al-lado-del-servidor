/* ===== PERFIL ===== */
function cargarPerfil(){
 console.log("=== CARGANDO PERFIL ===");
 
 if(!usuarioActivo){
  console.log("ERROR: No hay usuario activo");
  return;
 }
 
 console.log("Usuario activo:", usuarioActivo);
 console.log("Historial de compras:", usuarioActivo.historial);
 console.log("Métodos guardados:", usuarioActivo.metodosGuardados);
 
 // Cargar datos básicos
 document.getElementById("perfilNombre").value = usuarioActivo.nombre;
 document.getElementById("perfilEmail").value = usuarioActivo.email;
 
 // Cargar foto
 if(usuarioActivo.foto){
  document.getElementById("perfilFotoPreview").src = usuarioActivo.foto;
 } else {
  document.getElementById("perfilFotoPreview").src = `https://ui-avatars.com/api/?name=${encodeURIComponent(usuarioActivo.nombre)}&size=120&background=2a5298&color=fff`;
 }
 
 // Cargar historial de compras
 const historialDiv = document.getElementById("historialCompras");
 
 if(!usuarioActivo.historial || usuarioActivo.historial.length === 0){
  console.log("No hay historial de compras");
  historialDiv.innerHTML = '<p style="text-align:center;color:#999;padding:20px">No has realizado ninguna compra aún</p>';
 } else {
  console.log("Renderizando", usuarioActivo.historial.length, "compras");
  historialDiv.innerHTML = '';
  
  // Mostrar del más reciente al más antiguo
  const historialOrdenado = [...usuarioActivo.historial].reverse();
  
  historialOrdenado.forEach((compra, index) => {
   console.log(`Renderizando compra ${index}:`, compra);
   
   historialDiv.innerHTML += `
    <div class="historial-item">
     <div style="display:flex;justify-content:space-between;margin-bottom:10px">
      <strong>Pedido #${compra.id}</strong>
      <span style="color:#666">${compra.fecha}</span>
     </div>
     <div style="color:#666;margin-bottom:8px">
      ${compra.productos.length} producto(s) - ${compra.metodoPago} ****${compra.ultimosDigitos}
     </div>
     <div style="display:flex;gap:20px;font-size:14px;flex-wrap:wrap">
      <span>Subtotal: $${compra.subtotal.toLocaleString()} MXN</span>
      <span>IVA: $${compra.iva.toLocaleString()} MXN</span>
      <strong style="color:#27ae60">Total: $${compra.total.toLocaleString()} MXN</strong>
     </div>
     <div style="margin-top:10px;padding-top:10px;border-top:1px solid #ddd">
      <strong style="font-size:14px">Productos:</strong>
      <ul style="margin:5px 0;padding-left:20px;font-size:14px;color:#666">
       ${compra.productos.map(p => `<li>${p.nombre} - $${p.precio.toLocaleString()} MXN</li>`).join('')}
      </ul>
     </div>
    </div>
   `;
  });
 }
 
 // Cargar métodos de pago guardados
 const metodosDiv = document.getElementById("metodosPago");
 
 if(!usuarioActivo.metodosGuardados || usuarioActivo.metodosGuardados.length === 0){
  console.log("No hay métodos de pago guardados");
  metodosDiv.innerHTML = '<p style="text-align:center;color:#999;padding:20px">No tienes métodos de pago guardados</p>';
 } else {
  console.log("Renderizando", usuarioActivo.metodosGuardados.length, "métodos de pago");
  metodosDiv.innerHTML = '';
  
  usuarioActivo.metodosGuardados.forEach((metodo, index) => {
   console.log(`Renderizando método ${index}:`, metodo);
   
   metodosDiv.innerHTML += `
    <div class="metodo-item">
     <div>
      <strong>${metodo.tipo === 'Crédito' ? '💳' : '💳'} Tarjeta de ${metodo.tipo}</strong>
      <div style="color:#666;font-size:14px">**** **** **** ${metodo.ultimosDigitos}</div>
      <div style="color:#999;font-size:12px">${metodo.titular} - Exp: ${metodo.fechaExp}</div>
     </div>
     <button onclick="eliminarMetodo(${index})" style="background:#e74c3c;font-size:14px;padding:8px 15px">Eliminar</button>
    </div>
   `;
  });
 }
 
 console.log("=== PERFIL CARGADO ===");
}

function cambiarFotoPerfil(){
 const file = document.getElementById("perfilFoto").files[0];
 if(!file) return;
 
 const reader = new FileReader();
 reader.onload = function(e){
  usuarioActivo.foto = e.target.result;
  document.getElementById("perfilFotoPreview").src = e.target.result;
  toast("Foto actualizada");
 };
 reader.readAsDataURL(file);
}

function actualizarPerfil(){
 if(!usuarioActivo) return;
 
 const nuevoNombre = document.getElementById("perfilNombre").value;
 if(!nuevoNombre){
  return toast("El nombre no puede estar vacío");
 }
 
 usuarioActivo.nombre = nuevoNombre;
 toast("✅ Perfil actualizado correctamente");
}

function cambiarPassword(){
 if(!usuarioActivo) return;
 
 const actual = document.getElementById("passActual").value;
 const nueva = document.getElementById("passNueva").value;
 const confirmar = document.getElementById("passConfirmar").value;
 
 if(!actual || !nueva || !confirmar){
  return toast("Completa todos los campos");
 }
 
 if(hash(actual) !== usuarioActivo.pass){
  return toast("Contraseña actual incorrecta");
 }
 
 if(nueva !== confirmar){
  return toast("Las contraseñas no coinciden");
 }
 
 if(nueva.length < 6){
  return toast("La contraseña debe tener al menos 6 caracteres");
 }
 
 usuarioActivo.pass = hash(nueva);
 document.getElementById("passActual").value = "";
 document.getElementById("passNueva").value = "";
 document.getElementById("passConfirmar").value = "";
 toast("✅ Contraseña actualizada correctamente");
}

function eliminarMetodo(index){
 if(!usuarioActivo) return;
 
 console.log("Eliminando método de pago en índice:", index);
 usuarioActivo.metodosGuardados.splice(index, 1);
 console.log("Métodos restantes:", usuarioActivo.metodosGuardados);
 
 cargarPerfil();
 toast("Método de pago eliminado");
}