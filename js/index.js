const producto = [
  {
    precio: 500,
    id: 1,
    title: "Café",
    thumbnailUrl: "https://picsum.photos/id/0/600",
  },
  {
    precio: 300,
    id: 2,
    title: "Pizza",
    thumbnailUrl: "https://picsum.photos/id/10/600",
  },
  {
    precio: 100,
    id: 3,
    title: "Agua",
    thumbnailUrl: "https://picsum.photos/id/20/600",
  },
  {
    precio: 50,
    id: 4,
    title: "Sandía",
    thumbnailUrl: "https://picsum.photos/id/30/600",
  },
  {
    precio: 10,
    id: 5,
    title: "Mango",
    thumbnailUrl: "https://picsum.photos/id/40/600",
  },
  {
    precio: 150,
    id: 6,
    title: "Chela",
    thumbnailUrl: "https://picsum.photos/id/50/600",
  },
];

let items = [];
const tabla = document.getElementById("tabla");
tabla.innerHTML = "";
producto.forEach((element) => {
  tabla.innerHTML += `
       <div class="col-2">
      <div class="p-3 card">
        <img src="${element.thumbnailUrl}" class="card-img-top  d-block mx-auto" alt="${element.title}">
        <h5 class="card-title" id="title">${element.title}</h5>
        <p class="card-text">Precio: ${element.precio}</p>
         <button 
          type="button" 
          class="btn btn-primary" 
          onclick="agregarCar(${element.id}, '${element.title}', ${element.precio})">
          Añadir
        </button>
      </div>
    </div>
    `;
});

function agregarCar(id, title,precio) {
    const carrito = {
        id:id,
        title: title,
        precio: precio
    }
    items.push(carrito)
    console.log(items)
    cargar()
}
function cargar() {
    const carrito = document.getElementById('carrito');
    carrito.innerHTML = "";
    let total = 0
    items.forEach(item => {
        carrito.innerHTML += `
        <div class="row">
            <div class="col-3">${item.title}</div>
            <div class="col-3">${item.precio}</div>
            <div class="col-3">
                <button class="btn btn-danger" onclick="eliminarCar(${item.id})">Eliminar</button>
            </div>
        </div>
        `
        total += item.precio
    })
    document.getElementById('total').innerText = total
}