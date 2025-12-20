/* ===== MAIN ===== */
function mostrar(id){
  // Oculta todas las secciones EXCEPTO el banner
  document.querySelectorAll("section").forEach(s=>{
    if(s.id !== "promoBanner"){
      s.classList.add("hidden");
    }
  });

  document.getElementById(id).classList.remove("hidden");

  if (id === "pago") {
    if(carrito.length === 0){
      toast("Tu carrito está vacío");
      verCarrito();
      return;
    }

    const subtotal = carrito.reduce((sum, p) => sum + p.precio, 0);
    const iva = subtotal * 0.16;
    const total = subtotal + iva;

    document.getElementById("subtotalPago").textContent = "$" + subtotal.toLocaleString() + " MXN";
    document.getElementById("ivaPago").textContent = "$" + iva.toLocaleString() + " MXN";
    document.getElementById("totalPago").textContent = "$" + total.toLocaleString() + " MXN";
  }

  if(id === "perfil"){
    cargarPerfil();
  }
}