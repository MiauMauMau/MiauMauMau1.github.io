// Datos de productos actualizados
const productos = [
  {
    nombre: "Tenis Casual Blanco",
    categoria: "tenis",
    precio: 1800,
    talla: 7,
    descripcion: "Tenis ortopédicos diseñados para actividades deportivas con soporte adicional para el arco del pie y amortiguación superior.",
    imagenes: [
      "img/tenis/1.jpg",
    ]
  },
  {
    nombre: "Tenis Casual Negro",
    categoria: "tenis",
    precio: 1800,
    talla: 7,
    descripcion: "Tenis ortopédicos diseñados para actividades deportivas con soporte adicional para el arco del pie y amortiguación superior.",
    imagenes: [
      "img/tenis/5.jpg",
    ]
  },
  {
    nombre: "Tenis Deportivo negro",
    categoria: "tenis",
    precio: 1800,
    talla: 7,
    descripcion: "Tenis ortopédicos diseñados para actividades deportivas con soporte adicional para el arco del pie y amortiguación superior.",
    imagenes: [
      "img/tenis/6.jpg",
    ]
  },
  {
    nombre: "Tenis Deportivo Blanco",
    categoria: "tenis",
    precio: 1800,
    talla: 7,
    descripcion: "Tenis ortopédicos diseñados para actividades deportivas con soporte adicional para el arco del pie y amortiguación superior.",
    imagenes: [
      "img/tenis/11.jpg",
    ]
  },
  {
    nombre: "Zapatos Escolares",
    categoria: "zapatillas",
    precio: 1500,
    talla: 7,
    descripcion: "Zapatos ortopédicos para uso diario con plantilla anatómica y materiales transpirables de alta calidad.",
    imagenes: [
      "img/zapatos/10.jpg",
    ]
  },
  {
    nombre: "Zapatos Casuales Negros",
    categoria: "zapatillas",
    precio: 1500,
    talla: 7,
    descripcion: "Zapatos ortopédicos para uso diario con plantilla anatómica y materiales transpirables de alta calidad.",
    imagenes: [
      "img/zapatos/4.jpg",
    ]
  },
  {
    nombre: "Botas Para Dama Largas",
    categoria: "botas",
    precio: 1750,
    talla: 7,
    descripcion: "Botas ortopédicas de cuero genuino con soporte tobillo y plantilla personalizable para uso profesional.",
    imagenes: [
      "img/botas/2.jpg",
    ]
  },
  {
    nombre: "Botas Para de Uso Rudo",
    categoria: "botas",
    precio: 850,
    talla: 7,
    descripcion: "Botas ortopédicas de cuero genuino con soporte tobillo y plantilla personalizable para uso Rudo.",
    imagenes: [
      "img/botas/3.jpg",
    ]
  },
  {
    nombre: "Botines Elegantes",
    categoria: "botines",
    precio: 950,
    talla: 7,
    descripcion: "Botines ortopédicos de diseño elegante, perfectos para ocasiones formales sin sacrificar la comodidad.",
    imagenes: [
      "img/botines/9.jpg",

    ]
  },
  {
    nombre: "Botines  Escolares",
    categoria: "botines",
    precio: 950,
    talla: 7,
    descripcion: "Botines ortopédicos de diseño elegante, perfectos para ocasiones formales sin sacrificar la comodidad.",
    imagenes: [
      "img/botines/10.jpg",
    ]
  },
  {
    nombre: "Botines Vaqueros Rodeo",
    categoria: "botines",
    precio: 950,
    talla: 7,
    descripcion: "Botines ortopédicos de diseño elegante, perfectos para ocasiones formales sin sacrificar la comodidad.",
    imagenes: [
      "img/botines/8.jpg",
    ]
  },
   {
    nombre: "Botines Elegantes Cafe Oscuro",
    categoria: "botines",
    precio: 950,
    talla: 7,
    descripcion: "Botines ortopédicos de diseño elegante, perfectos para ocasiones formales sin sacrificar la comodidad.",
    imagenes: [
      "img/botines/7.jpg",
    ]
  },
  {
    nombre: "Plantillas de Calce",
    categoria: "plantillas",
    precio: 250,
    talla: 7,
    descripcion: "Son plantillas diseñadas para mejorar el ajuste del calzado y dar soporte adicional al pie . Ayudan a compensar pequeñas diferencias de altura entre piernas, mejorar la postura y brindar comodidad y estabilidad al caminar, especialmente en personas con pies sensibles o desiguales.",
    imagenes: [
      "img/pcalce/15.jpg",

    ]
  },
   {
    nombre: "Plantillas para pie plano",
    categoria: "plantillas",
    precio: 450,
    talla: 7,
    descripcion: "Estas plantillas tienen un arco elevado que brinda soporte al arco natural del pie. Se usan para corregir o aliviar molestias del pie plano, mejorar la alineación del cuerpo y prevenir dolores en los pies, tobillos, rodillas o espalda causados por el mal apoyo del pie.",
    imagenes: [
      "img/pcalce/17.jpg",
    ]
  },
   {
    nombre: "Plantillas Para rodilla con genu varo",
    categoria: "plantillas",
    precio: 450,
    talla: 7,
    descripcion: "Son plantillas especialmente diseñadas para personas con genu varo (piernas arqueadas hacia afuera). Tienen una cuña o inclinación lateral que ayuda a redistribuir el peso del cuerpo, alinear mejor la pierna y reducir la presión en la parte interna de la rodilla, aliviando el dolor y frenando el desgaste articular.",
    imagenes: [
      "img/pcalce/16.jpg",
    ]
  },
  {
    nombre: "Taloneras para Espolón",
    categoria: "taloneras",
    precio: 400,
    talla: 7,
    descripcion: "Son plantillas pequeñas y acolchadas que se colocan en la parte trasera del zapato, bajo el talón, Su función es aliviar el dolor causado por el espolón calcáneo (una protuberancia ósea en el talón), amortiguando el impacto al caminar y reduciendo la presión sobre la zona afectada",
    imagenes: [
      "img/pespolon/30.jpg",
    ]
  },
   {
    nombre: "Twister",
    categoria: "twister",
    precio: 1900,
    talla: 0,
    descripcion: "La ortesis Twister es un dispositivo ortopédico que se coloca en las piernas de los niños para ayudar a corregir la rotación anormal de los pies o piernas ",
    imagenes: [
      "img/otwister/21.jpg",
      "img/otwister/20.jpg",
    ]
  },
  {
    nombre: "Barra de Browne Pediátrica",
    categoria: "barras",
    precio: 1700 ,
    talla: 0,
    descripcion: "Es un dispositivo ortopédico compuesto por dos zapatos unidos por una barra metálica ajustable Se utiliza principalmente en bebés y niños con pie equinovaro (o pie zambo), para mantener los pies en la posición corregida. Ayuda a evitar recaídas al mantener los pies girados hacia afuera durante el desarrollo.",
    imagenes: [
    "img/dbrown/51.jpg",
    "img/dbrown/50.jpg",
    ]
  }
];


// Datos de los servicios
const serviciosData = [
  {
    titulo: "Zapatos Ortopédicos",
    imagen: "img/fzapato.jpg",
    descripcion: "Hacemos zapatos especiales que se adaptan a cada pie. Son cómodos, seguros y ayudan a corregir problemas al caminar. Diseñados a medida para cada persona."
  },
  {
    titulo: "Plantillas Ortopédicas",
    imagen: "img/fplantilla.jpg",
    descripcion: "Creamos plantillas que se colocan dentro del zapato para mejorar la postura y aliviar el dolor. Hechas a la medida de cada pie."
  },
  {
    titulo: "Taloneras Para Espolón",
    imagen: "img/fespolon.jpg",
    descripcion: "Hacemos taloneras suaves que se usan para reducir el dolor en el talón causado por espolones. Diseñadas para mayor comodidad al caminar."
  },
  {
    titulo: "Taloneras de Calce",
    imagen: "img/fcalce.jpg",
    descripcion: "Producimos taloneras que ayudan a que el zapato quede mejor y sea más cómodo. Ideales para zapatos que quedan flojos o aprietan."
  },
  {
    titulo: "Barras Dennis Browne",
    imagen: "img/fdennisbrown.jpg",
    descripcion: "Fabricamos estas barras que conectan los zapatos de los bebés para corregir la posición de los pies. Usadas en tratamientos de pie zambo."
  },
  {
    titulo: "Twister",
    imagen: "img/ftwister.jpg",
    descripcion: "Diseñamos y fabricamos twisters a medida para corregir la rotación de piernas en niños. Ideales para tratamientos ortopédicos, cómodos y hechos según indicación médica."
  }
];


// Variables globales
let indiceImagenActual = 0;
let imagenesProductoActual = [];
let productosFiltrados = [...productos];

// Función para configurar WhatsApp
function configurarWhatsApp(mensaje) {
  const telefono = '529631004207'; // Número sin el + inicial
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

// Loader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.loader').style.opacity = '0';
    setTimeout(() => {
      document.querySelector('.loader').style.display = 'none';
    }, 500);
  }, 1000);
});

// Navegación móvil
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.menu a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }

  // Inicializar productos
  mostrarProductos();
  
  // Event listeners para filtros
  const categoria = document.getElementById('categoria');
  const precioMin = document.getElementById('precioMin');
  const precioMax = document.getElementById('precioMax');
  
  if (categoria) categoria.addEventListener('change', mostrarProductos);
  if (precioMin) precioMin.addEventListener('input', debounce(mostrarProductos, 300));
  if (precioMax) precioMax.addEventListener('input', debounce(mostrarProductos, 300));

  // Scroll suave para indicador
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Animaciones al hacer scroll
  observarElementos();
  
  // Botones del hero
  const btnPrimary = document.querySelector('.btn-primary');
  const btnSecondary = document.querySelector('.btn-secondary');
  
  if (btnPrimary) {
    btnPrimary.addEventListener('click', () => {
      document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  if (btnSecondary) {
    btnSecondary.addEventListener('click', () => {
      configurarWhatsApp("Hola, me gustaría obtener más información sobre sus servicios y productos");
    });
  }

  // Configurar servicio detalle
  document.querySelectorAll('.btn-service').forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const servicio = serviciosData[index];
      document.getElementById('detalle-titulo').textContent = servicio.titulo;
      document.getElementById('detalle-imagen').src = servicio.imagen;
      document.getElementById('detalle-descripcion').textContent = servicio.descripcion;
      
      // Configurar WhatsApp para servicios
      const btnWhatsappServicio = document.querySelector('.servicio-detalle .btn-whatsapp');
      if (btnWhatsappServicio) {
        const mensaje = `Hola, me interesa el servicio: ${servicio.titulo}`;
        btnWhatsappServicio.onclick = () => configurarWhatsApp(mensaje);
      }
      
      document.querySelector('.servicio-detalle').classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Cerrar detalles de servicio
  const cerrarDetalle = document.querySelector('.cerrar-detalle');
  if (cerrarDetalle) {
    cerrarDetalle.addEventListener('click', () => {
      document.querySelector('.servicio-detalle').classList.remove('active');
      document.body.style.overflow = '';
    });
  }
});

// Función debounce para optimizar filtros
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Crear HTML del producto mejorado
function crearProductoHTML(producto, index) {
  return `
    <div class="producto animate" style="animation-delay: ${index * 0.1}s" onclick="abrirModal(${JSON.stringify(producto).replace(/"/g, '&quot;')})">
      <div class="producto-image">
        <img src="${producto.imagenes[0]}" alt="${producto.nombre}" loading="lazy" />
        <div class="producto-overlay">
          <i class="fas fa-eye"></i>
          <span>Ver detalles</span>
        </div>
      </div>
      <div class="producto-content">
        <h3>${producto.nombre}</h3>
        <p class="precio">$${producto.precio.toLocaleString()} MXN</p>
        ${producto.talla > 0 ? `<p class="talla">Talla: ${producto.talla}</p>` : ''}
        <button class="btn-ver-mas">
          <i class="fas fa-search-plus"></i>
          Ver más
        </button>
      </div>
    </div>
  `;
}

// Mostrar productos con animaciones
function mostrarProductos() {
  const contenedor = document.getElementById("lista-productos");
  if (!contenedor) return;
  
  // Mostrar skeleton loading
  contenedor.innerHTML = Array(6).fill().map(() => `
    <div class="producto skeleton">
      <div style="height: 200px; background: #f0f0f0; margin-bottom: 1rem;"></div>
      <div style="height: 20px; background: #f0f0f0; margin-bottom: 0.5rem;"></div>
      <div style="height: 16px; background: #f0f0f0; margin-bottom: 0.5rem;"></div>
      <div style="height: 40px; background: #f0f0f0;"></div>
    </div>
  `).join('');

  // Simular carga
  setTimeout(() => {
    const categoria = document.getElementById("categoria")?.value || '';
    const precioMin = parseInt(document.getElementById("precioMin")?.value) || 0;
    const precioMax = parseInt(document.getElementById("precioMax")?.value) || Infinity;

    productosFiltrados = productos.filter(p =>
      (!categoria || p.categoria === categoria) &&
      p.precio >= precioMin &&
      p.precio <= precioMax
    );

    if (productosFiltrados.length === 0) {
      contenedor.innerHTML = `
        <div class="no-productos">
          <i class="fas fa-search"></i>
          <h3>No se encontraron productos</h3>
          <p>Intenta ajustar los filtros de búsqueda</p>
        </div>
      `;
      return;
    }

    contenedor.innerHTML = productosFiltrados
      .map((producto, index) => crearProductoHTML(producto, index))
      .join('');
  }, 500);
}

// Abrir modal mejorado
function abrirModal(producto) {
  imagenesProductoActual = producto.imagenes;
  indiceImagenActual = 0;

  mostrarImagenModal();

  // Actualizar información del modal
  const elementos = {
    'modal-nombre': producto.nombre,
    'modal-precio': `$${producto.precio.toLocaleString()} MXN`,
    'modal-talla': producto.talla > 0 ? `Talla: ${producto.talla}` : 'Talla única',
    'modal-descripcion': producto.descripcion
  };

  Object.entries(elementos).forEach(([id, texto]) => {
    const elemento = document.getElementById(id);
    if (elemento) elemento.textContent = texto;
  });

  // Crear miniaturas
  crearMiniaturas();

  // Configurar botón de WhatsApp para productos
  const btnWhatsapp = document.querySelector('.modal .btn-whatsapp');
  if (btnWhatsapp) {
    const mensaje = `Hola, me interesa el producto: ${producto.nombre} - $${producto.precio.toLocaleString()} MXN`;
    btnWhatsapp.onclick = () => configurarWhatsApp(mensaje);
  }

  // Mostrar modal
  const modal = document.getElementById("modal");
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = 'hidden';
  }
}

// Crear miniaturas mejoradas
function crearMiniaturas() {
  const thumbnailsContainer = document.getElementById("modal-thumbnails");
  if (!thumbnailsContainer) return;

  thumbnailsContainer.innerHTML = "";

  imagenesProductoActual.forEach((imgSrc, index) => {
    const thumb = document.createElement("img");
    thumb.src = imgSrc;
    thumb.alt = `Miniatura ${index + 1}`;
    thumb.classList.toggle("active", index === indiceImagenActual);
    thumb.loading = "lazy";

    thumb.addEventListener("click", () => {
      indiceImagenActual = index;
      mostrarImagenModal();
      actualizarMiniaturas();
    });

    thumbnailsContainer.appendChild(thumb);
  });
}

// Mostrar imagen en modal con animación
function mostrarImagenModal() {
  const img = document.getElementById("modal-img");
  if (!img || !imagenesProductoActual.length) return;

  img.style.opacity = '0';
  
  setTimeout(() => {
    img.src = imagenesProductoActual[indiceImagenActual];
    img.alt = `Imagen ${indiceImagenActual + 1} de ${imagenesProductoActual.length}`;
    img.style.opacity = '1';
  }, 150);

  actualizarMiniaturas();
}

// Actualizar miniaturas activas
function actualizarMiniaturas() {
  const thumbnails = document.querySelectorAll("#modal-thumbnails img");
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle("active", i === indiceImagenActual);
  });
}

// Event listeners del modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const cerrarBtn = modal?.querySelector(".cerrar");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Cerrar modal
  if (cerrarBtn) {
    cerrarBtn.addEventListener("click", cerrarModal);
  }

  // Cerrar modal al hacer click fuera
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) cerrarModal();
    });
  }

  // Navegación de imágenes
  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navegarImagen(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navegarImagen(1);
    });
  }

  // Navegación con teclado
  document.addEventListener('keydown', (e) => {
    if (modal?.style.display === 'flex') {
      switch(e.key) {
        case 'Escape':
          cerrarModal();
          break;
        case 'ArrowLeft':
          navegarImagen(-1);
          break;
        case 'ArrowRight':
          navegarImagen(1);
          break;
      }
    }
  });
});

// Cerrar modal
function cerrarModal() {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
  }
}

// Navegar entre imágenes
function navegarImagen(direccion) {
  if (!imagenesProductoActual.length) return;

  indiceImagenActual += direccion;
  
  if (indiceImagenActual < 0) {
    indiceImagenActual = imagenesProductoActual.length - 1;
  } else if (indiceImagenActual >= imagenesProductoActual.length) {
    indiceImagenActual = 0;
  }
  
  mostrarImagenModal();
}

// Intersection Observer para animaciones
function observarElementos() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observar elementos que necesitan animación
  document.querySelectorAll('.servicio-card, .info-card, .section-header').forEach(el => {
    observer.observe(el);
  });
}

// Cambio de header al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
      header.style.backdropFilter = 'blur(15px)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
    }
  }
});

// Lazy loading para imágenes
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

