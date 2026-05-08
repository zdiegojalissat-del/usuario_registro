document.getElementById("formulario")
.addEventListener("submit", function(event) {

  event.preventDefault();

  const password =
  document.getElementById("password").value;

  const mensaje =
  document.getElementById("mensaje");

  if(password.length >= 8) {

    mensaje.textContent =
    "✅ Registro completado correctamente";

    mensaje.style.color = "green";

  } else {

    mensaje.textContent =
    "❌ La contraseña debe tener mínimo 8 caracteres";

    mensaje.style.color = "red";
  }

});
