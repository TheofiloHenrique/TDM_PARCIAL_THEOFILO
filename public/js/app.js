// Logica del front-end: consume la API y actualiza la tabla en pantalla.

const API_URL = '/api/items';

const form = document.getElementById('form-item');
const idInput = document.getElementById('item-id');
const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');
const table = document.getElementById('tabla-items');

// Carga la lista de items y la dibuja en la tabla
async function loadItems() {
  const response = await fetch(API_URL);
  const items = await response.json();

  table.innerHTML = '';
  items.forEach((item) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.description ?? ''}</td>
      <td>
        <button class="btn btn-sm btn-warning" onclick="editItem(${item.id})">Editar</button>
        <button class="btn btn-sm btn-danger" onclick="deleteItem(${item.id})">Eliminar</button>
      </td>
    `;
    table.appendChild(row);
  });
}

// Crea o actualiza un item, dependiendo de si hay un id en el formulario
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: nameInput.value,
    description: descriptionInput.value,
  };

  const id = idInput.value;

  if (id) {
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } else {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  form.reset();
  idInput.value = '';
  loadItems();
});

// Llena el formulario para editar un item existente
async function editItem(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const item = await response.json();

  idInput.value = item.id;
  nameInput.value = item.name;
  descriptionInput.value = item.description ?? '';
}

// Elimina un item
async function deleteItem(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  loadItems();
}

loadItems();
