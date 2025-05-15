// Manejo del formulario de contacto
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("mensaje").textContent = "¡Gracias por tu mensaje! Te responderemos pronto.";
    this.reset();
  });
  
  // Datos de las cabinas
  const cabinas = [
    {
      nombre: "Premium Business",
      descripcion: "Asientos tipo cama, privacidad, acceso a salas VIP, menú gourmet y entretenimiento premium.",
      imagen: "https://images.unsplash.com/photo-1588776814546-ec6b0b19f4f9?auto=format&fit=crop&w=800&q=60"
    },
    {
      nombre: "Economy Plus",
      descripcion: "Más espacio para piernas, ubicación preferencial y embarque prioritario.",
      imagen: "https://images.unsplash.com/photo-1616401786269-98d8380ee2e2?auto=format&fit=crop&w=800&q=60"
    },
    {
      nombre: "Turista (Economy)",
      descripcion: "Cabina estándar con opciones de entretenimiento, servicio abordo y snacks a la venta.",
      imagen: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=60"
    }
  ];
  
  // Insertar cabinas en el HTML
  const cabinaGrid = document.getElementById("cabinaGrid");
  
  cabinas.forEach(cabina => {
    const card = document.createElement("div");
    card.classList.add("cabina-card");
    card.innerHTML = `
      <img src="${cabina.imagen}" alt="${cabina.nombre}" />
      <h3>${cabina.nombre}</h3>
      <p>${cabina.descripcion}</p>
    `;
    cabinaGrid.appendChild(card);
  });