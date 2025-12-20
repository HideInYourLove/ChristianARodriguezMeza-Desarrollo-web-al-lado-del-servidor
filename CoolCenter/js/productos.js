/* ===== PRODUCTOS (35 Productos) ===== */
const productos = [
 {id:1,nombre:"iPhone 15 Pro Max",precio:26599,ram:"8 GB",memoria:"256 GB",categoria:"celulares",nuevo:true,oferta:false,rating:4.8,img:"https://www.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg",
  features:["Marca: Apple","Cámara: 48 MP (Principal) + 12 MP (Teleobjetivo 5x)","Chip A17 Pro","Pantalla: 6.7\" OLED","Titanio de grado aeroespacial"]},

 {id:2,nombre:"Samsung Galaxy S24 Ultra",precio:30999,ram:"12 GB",memoria:"512 GB",categoria:"celulares",nuevo:true,oferta:false,rating:4.9,img:"https://images.samsung.com/mx/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-yellow-back-mo.jpg?imbypass=true",
  features:["Marca: Samsung","Cámara: 200 MP + 50 MP + 10 MP + 12 MP","Pantalla: 6.8\" Dynamic AMOLED 2X","Incluye S-Pen","Marco de Titanio"]},

 {id:3,nombre:"Huawei Pura 80 Series",precio:39999,ram:"12 GB",memoria:"256 GB",categoria:"celulares",nuevo:true,oferta:false,rating:4.7,img:"https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/ecommerce/sa/new-events/2025/July/pura-80/skin/Pura-80-Pro-PCP-%E6%8D%A2%E8%82%A4_Wap.jpg",
  features:["Marca: Huawei","Cámara: Lente de alta resolución, como 40 MP en el Pro y 40 MP en el Ultra, 13 MP con enfoque automático"]},

 {id:4,nombre:"Huawei Mate X7",precio:48999,ram:"8 GB",memoria:"128 GB",categoria:"celulares",nuevo:false,oferta:true,rating:4.6,img:"https://mobileinfo.com.mx/wp-content/uploads/2025/11/Huawei-Mate-X7-official-images.jpg",
  features:["Marca: Huawei","Cámara: sensor principal de 48MP complementado por ultra gran angular de 5MP y sensores macro/profundidad de 2MP"]},

 {id:5,nombre:"Motorola Edge 50 Ultra",precio:19999,ram:"16 GB",memoria:"512 GB",categoria:"celulares",nuevo:false,oferta:true,rating:4.5,img:"https://m.media-amazon.com/images/I/71NpFXmHDLL._AC_UF350,350_QL50_.jpg",
  features:["Marca: Motorola","Cámara: 50 MP Principal + 64 MP Teleobjetivo","Acabado en madera real o cuero vegano","Pantalla pOLED 144Hz"]},

 {id:6,nombre:"OnePlus 12",precio:18500,ram:"16 GB",memoria:"512 GB",categoria:"celulares",nuevo:false,oferta:false,rating:4.7,img:"https://i.blogs.es/949e87/oneplus-12/840_560.jpeg",
  features:["Marca: OnePlus","Cámara: Hasselblad de 4ª generación (50+64+48 MP)","Procesador Snapdragon 8 Gen 3","Carga de 100W"]},

 {id:7,nombre:"Huawei Pura 70 Ultra",precio:27500,ram:"16 GB",memoria:"512 GB",categoria:"celulares",nuevo:false,oferta:false,rating:4.8,img:"https://apsaramobile.com/cdn/shop/files/Black_08cf0bb4-1197-45db-9eca-c48a407600ed.png?v=1715144446&width=1080",
  features:["Marca: Huawei","Cámara: Retráctil de 50 MP (Ultra Iluminación)","Cristal Kunlun Glass de alta resistencia","Carga inalámbrica 80W"]},

 {id:8,nombre:"Motorola Razr 60 Series",precio:18999,ram:"12 GB",memoria:"256 GB",categoria:"celulares",nuevo:true,oferta:false,rating:4.4,img:"https://http2.mlstatic.com/D_NQ_NP_697064-MLA95239234749_102025-O.webp",
  features:["Marca: Motorola","Cámara: cámara principal de 50 MP y una gran angular de 13 MP, además de una frontal de 32 MP"]},

 {id:9,nombre:"Sony Xperia 1 V",precio:25600,ram:"12 GB",memoria:"256 GB",categoria:"celulares",nuevo:false,oferta:false,rating:4.6,img:"https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac",
  features:["Marca: Sony","Cámara: Sensor Exmor T de 52 MP optimizado para video","Pantalla 4K HDR OLED 21:9","Jack de 3.5mm para audio Hi-Res"]},

 {id:10,nombre:"Moto G",precio:24800,ram:"8 GB",memoria:"256 GB",categoria:"celulares",nuevo:false,oferta:true,rating:4.3,img:"https://e01-expansion.uecdn.es/assets/multimedia/imagenes/2019/02/11/15498985712611.jpg",
  features:["Marca: Motorola","Ofrecen buenas cámaras (desde 50MP hasta 108MP) con IA","Opciones de RAM (4GB, 6GB, 8GB o más con virtualización)"]},

 {id:11,nombre:"Oppo Find X7 Ultra",precio:22900,ram:"16 GB",memoria:"256 GB",categoria:"celulares",nuevo:false,oferta:false,rating:4.7,img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  features:["Marca: Oppo","Cámara: Doble Periscopio (Cuatro sensores de 50 MP)","Motor de imágenes HyperTone","Pantalla de 4500 nits"]},

 {id:12,nombre:"Honor Magic6 Pro",precio:21000,ram:"12 GB",memoria:"512 GB",categoria:"celulares",nuevo:false,oferta:false,rating:4.6,img:"https://cdn.kalvo.com/uploads/img/gallery/58351-honor-magic6-pro-6.jpg",
  features:["Marca: Honor","Cámara: Teleobjetivo de 180 MP","Batería de Silicio-Carbono de 5600 mAh","Resistencia a caídas NanoCrystal Shield"]},

 {id:13,nombre:"Vivo X100 Pro",precio:19500,ram:"16 GB",memoria:"512 GB",categoria:"celulares",nuevo:false,oferta:true,rating:4.5,img:"https://i.blogs.es/13bb9a/vivo-x100-vivo-x100-pro-3/650_1200.jpeg",
  features:["Marca: Vivo","Cámara: Óptica ZEISS APO (Sensor de 1 pulgada)","Chip de imagen V3","Procesador Dimensity 9300"]},

 {id:14,nombre:"ZTE Nubia Z60 Ultra",precio:15800,ram:"16 GB",memoria:"256 GB",categoria:"celulares",nuevo:false,oferta:false,rating:4.4,img:"https://images.unsplash.com/photo-1523206489230-c012c64b2b48",
  features:["Marca: ZTE","Cámara: Lente de 35mm (50 MP) + Cámara bajo pantalla","Batería de 6000 mAh","Certificación IP68"]},

 {id:15,nombre:"Samsung Galaxy Z Fold5",precio:35999,ram:"12 GB",memoria:"512 GB",categoria:"celulares",nuevo:false,oferta:false,rating:4.8,img:"https://images.unsplash.com/photo-1678911820864-e2c567c655d7",
  features:["Marca: Samsung (Plegable)","Cámara: Triple 50+10+12 MP","Pantalla interior de 7.6\"","Multitarea avanzada con S-Pen"]},

 {id:16,nombre:"LG UltraGear 27GP850",precio:8499,ram:"N/A",memoria:"N/A",categoria:"monitores",nuevo:false,oferta:true,rating:4.7,img:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
  features:["Marca: LG","Resolución: 2560x1440 (2K)","Frecuencia: 165Hz","Panel IPS Nano","Tiempo de respuesta: 1ms","HDR10"]},

 {id:17,nombre:"ASUS ROG Swift PG279QM",precio:12999,ram:"N/A",memoria:"N/A",categoria:"monitores",nuevo:true,oferta:false,rating:4.9,img:"https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
  features:["Marca: ASUS","Resolución: 2560x1440 (2K)","Frecuencia: 240Hz","Panel Fast IPS","G-Sync Ultimate","RGB Aura Sync"]},

 {id:18,nombre:"Samsung Odyssey G7",precio:9899,ram:"N/A",memoria:"N/A",categoria:"monitores",nuevo:false,oferta:false,rating:4.8,img:"https://images.unsplash.com/photo-1585792180666-f7347c490ee2",
  features:["Marca: Samsung","Resolución: 2560x1440 (2K)","Frecuencia: 240Hz","Panel VA Curvo 1000R","Quantum Dot","HDR600"]},

 {id:19,nombre:"Dell S2721DGF",precio:7299,ram:"N/A",memoria:"N/A",categoria:"monitores",nuevo:false,oferta:true,rating:4.6,img:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
  features:["Marca: Dell","Resolución: 2560x1440 (2K)","Frecuencia: 165Hz","Panel IPS","FreeSync Premium Pro","DisplayHDR 400"]},

 {id:20,nombre:"AOC CQ27G2",precio:5999,ram:"N/A",memoria:"N/A",categoria:"monitores",nuevo:false,oferta:false,rating:4.5,img:"https://mmd-aoc2.oss-cn-hongkong.aliyuncs.com/Products/Monitors/G%20Line/G2/CQ27G2/CQ27G2_F.png",
  features:["Marca: AOC","Resolución: 2560x1440 (2K)","Frecuencia: 144Hz","Panel VA Curvo","FreeSync Premium","1ms MPRT"]},

 {id:21,nombre:"BenQ MOBIUZ EX2710Q",precio:8799,ram:"N/A",memoria:"N/A",categoria:"monitores",nuevo:false,oferta:false,rating:4.7,img:"https://images.unsplash.com/photo-1547082299-de196ea013d6",
  features:["Marca: BenQ","Resolución: 2560x1440 (2K)","Frecuencia: 165Hz","Panel IPS","HDRi","Altavoces 2.5W x2 + Subwoofer 5W"]},

 {id:22,nombre:"Logitech G Pro X TKL",precio:3299,ram:"N/A",memoria:"N/A",categoria:"teclados",nuevo:false,oferta:false,rating:4.8,img:"https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  features:["Marca: Logitech","Switches: GX Red/Blue/Brown intercambiables","RGB LIGHTSYNC","Cable USB-C desmontable","Diseño compacto TKL"]},

 {id:23,nombre:"Razer BlackWidow V3 TKL",precio:2899,ram:"N/A",memoria:"N/A",categoria:"teclados",nuevo:false,oferta:true,rating:4.7,img:"https://images.unsplash.com/photo-1595225476474-87563907a212",
  features:["Marca: Razer","Switches: Razer Green Mecánico","RGB Chroma","Cable USB-C","Compacto 80%","Reposamuñecas magnético incluido"]},

 {id:24,nombre:"Corsair K70 RGB TKL",precio:3799,ram:"N/A",memoria:"N/A",categoria:"teclados",nuevo:true,oferta:false,rating:4.9,img:"https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6",
  features:["Marca: Corsair","Switches: Cherry MX Speed Silver","RGB por tecla","Estructura de aluminio cepillado","Torneo 8000Hz"]},

 {id:25,nombre:"HyperX Alloy Origins Core",precio:2199,ram:"N/A",memoria:"N/A",categoria:"teclados",nuevo:false,oferta:false,rating:4.6,img:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
  features:["Marca: HyperX","Switches: HyperX Red","RGB brillante","Cable USB-C desmontable","Chasis de aluminio aeroespacial"]},

 {id:26,nombre:"SteelSeries Apex Pro TKL",precio:4599,ram:"N/A",memoria:"N/A",categoria:"teclados",nuevo:false,oferta:false,rating:4.9,img:"https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
  features:["Marca: SteelSeries","Switches: OmniPoint 2.0 ajustables","Pantalla OLED Smart Display","RGB por tecla","Actuación magnética 0.2-3.8mm"]},

 {id:27,nombre:"ASUS ROG Strix G16",precio:28999,ram:"16 GB DDR5",memoria:"512 GB SSD",categoria:"laptops",nuevo:true,oferta:false,rating:4.8,img:"https://images.unsplash.com/photo-1603302576837-37561b2e2302",
  features:["Marca: ASUS","Procesador: Intel Core i7-13650HX","GPU: NVIDIA RTX 4060 8GB","Pantalla: 16\" FHD 165Hz"]},

 {id:28,nombre:"Lenovo Legion 5 Pro",precio:32999,ram:"16 GB DDR5",memoria:"1 TB SSD",categoria:"laptops",nuevo:false,oferta:false,rating:4.9,img:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
  features:["Marca: Lenovo","Procesador: AMD Ryzen 7 7745HX","GPU: NVIDIA RTX 4070 8GB","Pantalla: 16\" WQXGA 240Hz"]},

 {id:29,nombre:"HP OMEN 16",precio:26499,ram:"16 GB DDR5",memoria:"512 GB SSD",categoria:"laptops",nuevo:false,oferta:true,rating:4.7,img:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
  features:["Marca: HP","Procesador: Intel Core i7-13700HX","GPU: NVIDIA RTX 4060 8GB","Pantalla: 16.1\" FHD 165Hz","OMEN Gaming Hub"]},

 {id:30,nombre:"Acer Predator Helios Neo 16",precio:29999,ram:"16 GB DDR5",memoria:"1 TB SSD",categoria:"laptops",nuevo:false,oferta:false,rating:4.8,img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  features:["Marca: Acer","Procesador: Intel Core i7-13700HX","GPU: NVIDIA RTX 4060 8GB","Pantalla: 16\" WUXGA 165Hz"]},

 {id:31,nombre:"MSI Katana 15",precio:24999,ram:"16 GB DDR5",memoria:"512 GB SSD",categoria:"laptops",nuevo:false,oferta:false,rating:4.6,img:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
  features:["Marca: MSI","Procesador: Intel Core i7-13620H","GPU: NVIDIA RTX 4050 6GB","Pantalla: 15.6\" FHD 144Hz","Cooler Boost 5"]},

 {id:32,nombre:"Dell G15 5530",precio:23999,ram:"16 GB DDR5",memoria:"512 GB SSD",categoria:"laptops",nuevo:false,oferta:true,rating:4.5,img:"https://images.unsplash.com/photo-1484788984921-03950022c9ef",
  features:["Marca: Dell","Procesador: Intel Core i7-13650HX","GPU: NVIDIA RTX 4050 6GB","Pantalla: 15.6\" FHD 165Hz"]},

 {id:33,nombre:"ASUS TUF Gaming A15",precio:21999,ram:"16 GB DDR5",memoria:"512 GB SSD",categoria:"laptops",nuevo:false,oferta:false,rating:4.7,img:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6",
  features:["Marca: ASUS","Procesador: AMD Ryzen 7 7735HS","GPU: NVIDIA RTX 4050 6GB","Pantalla: 15.6\" FHD 144Hz"]},

 {id:34,nombre:"Gigabyte AORUS 15",precio:31999,ram:"16 GB DDR5",memoria:"1 TB SSD",categoria:"laptops",nuevo:true,oferta:false,rating:4.8,img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  features:["Marca: Gigabyte","Procesador: Intel Core i7-13700H","GPU: NVIDIA RTX 4060 8GB","Pantalla: 15.6\" FHD 360Hz"]},

 {id:35,nombre:"Razer Blade 15",precio:44999,ram:"16 GB DDR5",memoria:"1 TB SSD",categoria:"laptops",nuevo:false,oferta:false,rating:4.9,img:"https://th.bing.com/th/id/R.aa66cd9f40e865082757d215cf25e849?rik=hG6CGYzJAKgz7w&pid=ImgRaw&r=0",
  features:["Marca: Razer","Procesador: Intel Core i7-13800H","GPU: NVIDIA RTX 4070 8GB","Pantalla: 15.6\" QHD 240Hz","Chasis CNC Aluminio"]}
];

const listaProductos = document.getElementById("listaProductos");

function renderProductos(lista){
 listaProductos.innerHTML = "";
 lista.forEach(p=>{
  const badgeHTML = p.nuevo ? '<span class="badge badge-nuevo">NUEVO</span>' : 
                    p.oferta ? '<span class="badge badge-oferta">OFERTA</span>' : '';
  const stars = "★".repeat(Math.floor(p.rating)) + "☆".repeat(5-Math.floor(p.rating));
  
  listaProductos.innerHTML += `
  <div class="card">
   ${badgeHTML}
   <img src="${p.img}">
   <h4>${p.nombre}</h4>
   <div class="rating">
    <span class="stars">${stars}</span>
    <span style="color:#666;font-size:14px">(${p.rating})</span>
   </div>
   <div class="price">${p.precio} MXN</div>
   <button onclick="verDetalle(${p.id})">Ver detalles</button>
  </div>`;
 });
}

function filtrarProductos(){
 let lista = [...productos];
 const cat = document.getElementById("filtroCategoria").value;
 const orden = document.getElementById("ordenPrecio").value;
 
 if(cat !== "todos"){
  lista = lista.filter(p => p.categoria === cat);
 }
 
 if(orden === "menor"){
  lista.sort((a,b) => a.precio - b.precio);
 } else if(orden === "mayor"){
  lista.sort((a,b) => b.precio - a.precio);
 }
 
 renderProductos(lista);
}

renderProductos(productos);

/* ===== DETALLE ===== */
let productoActual=null;
function verDetalle(id){
 productoActual = productos.find(p=>p.id===id);
 mostrar("detalle");
 dImg.src=productoActual.img;
 dNombre.textContent=productoActual.nombre;
 dPrecio.textContent="$"+productoActual.precio+" MXN";
 const stars = "★".repeat(Math.floor(productoActual.rating)) + "☆".repeat(5-Math.floor(productoActual.rating));
 dStars.textContent = stars;
 dRating.textContent = `(${productoActual.rating})`;
 dFeatures.innerHTML="";
 productoActual.features.forEach(f=>dFeatures.innerHTML+=`<li>${f}</li>`);
}

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
    ${p.nombre} - ${p.precio}
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

/* ===== PAGO ===== */
function cambiarTipoPago(){
 const tipo = document.querySelector('input[name="tipoPago"]:checked').value;
 document.getElementById("tipoTarjetaTexto").textContent = 
   tipo === "tdc" ? "Datos de Tarjeta de Crédito" : "Datos de Tarjeta de Débito";
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
 if(!usuarioActivo) return toast("Debes iniciar sesión");
 
 const numTarjeta = document.getElementById("numTarjeta").value;
 const nombreTitular = document.getElementById("nombreTitular").value;
 const fechaExp = document.getElementById("fechaExp").value;
 const cvv = document.getElementById("cvv").value;
 const tipoTarjeta = document.querySelector('input[name="tipoPago"]:checked').value;
 
 if(!numTarjeta || !nombreTitular || !fechaExp || !cvv){
  return toast("Por favor completa todos los campos");
 }
 
 if(numTarjeta.replace(/\s/g, '').length < 13){
  return toast("Número de tarjeta inválido");
 }
 
 if(fechaExp.length !== 5){
  return toast("Fecha de expiración inválida (MM/AA)");
 }
 
 if(cvv.length < 3){
  return toast("CVV inválido");
 }
 
 // Simular procesamiento
 toast("Procesando pago...");
 
 setTimeout(() => {
  const subtotal = carrito.reduce((sum, p) => sum + p.precio, 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;
  
  // Guardar en historial
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
  
  usuarioActivo.historial.push(compra);
  
  // Guardar método de pago si no existe
  const ultimosDigitos = numTarjeta.replace(/\s/g, '').slice(-4);
  const metodoExiste = usuarioActivo.metodosGuardados.find(m => m.ultimosDigitos === ultimosDigitos);
  
  if(!metodoExiste){
   usuarioActivo.metodosGuardados.push({
    tipo: tipoTarjeta === 'tdc' ? 'Crédito' : 'Débito',
    ultimosDigitos: ultimosDigitos,
    titular: nombreTitular,
    fechaExp: fechaExp
   });
  }
  
  toast("✅ ¡Pago exitoso! Total: $" + total.toLocaleString() + " MXN");
  carrito = [];
  actualizarContador();
  
  // Limpiar formulario
  document.getElementById("numTarjeta").value = "";
  document.getElementById("nombreTitular").value = "";
  document.getElementById("fechaExp").value = "";
  document.getElementById("cvv").value = "";
  
  setTimeout(() => {
   mostrar("catalogo");
  }, 2000);
 }, 1500);
}
