/* ===== CARRITO ===== */
let carrito = [];

function actualizarContador(){
 document.getElementById("cartCount").textContent = carrito.length;
}

function agregarCarrito(){
 if(!usuarioActivo) return toast("Debes iniciar sesión");
 carrito.push(productoActual);
 actualizarContador();
 toast("Producto agregado al carrito");
}

function verCarrito(){
 mostrar("carrito");
 let total=0;
 listaCarrito.innerHTML="";
 carrito.forEach((p,i)=>{
  total+=p.precio;
  listaCarrito.innerHTML+=`
   <div class="card">
    ${p.nombre} - $${p.precio} MXN
    <button onclick="eliminar(${i})">Eliminar</button>
   </div>`;
 });
 totalCarrito.textContent="Total: $"+total+" MXN";
}

function eliminar(i){
 carrito.splice(i,1);
 actualizarContador();
 verCarrito();
}

actualizarContador();