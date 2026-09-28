// Logica del front-end: envia el registro del usuario a la API

const API_URL = '/api/users';

const form = document.getElementById('form-signup');
const nameInput = document.getElementById('nombre');
const emailInput = document.getElementById('correo');

const alertBox = document.getElementById('signup-alert');

function showAlert(type, message) {
  alertBox.className = `alert alert-${type}`;
  alertBox.textContent = message;

  setTimeout(() => {
    alertBox.classList.add('d-none');
  }, 4000);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: nameInput.value,
    email: emailInput.value,
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error('Error en el registro');

    form.reset();
    showAlert('success', '¡Registro exitoso! Pronto recibirás noticias de Bloodvania.');
  } catch (error) {
    showAlert('danger', 'Hubo un error al registrarte. Intenta de nuevo.');
  }
});