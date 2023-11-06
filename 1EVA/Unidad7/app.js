document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  const input = document.getElementById("input");
  const listaTareas = document.getElementById("lista-tareas");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const tarea = input.value.trim();
    if (tarea) {
      agregarTarea(tarea);
      input.value = "";
    }
  });

  listaTareas.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("fas")) {
      if (target.classList.contains("fa-check-circle")) {
        marcarTareaCompletada(target);
      } else if (target.classList.contains("fa-times-circle")) {
        eliminarTarea(target);
      }
    }
  });

  function agregarTarea(tarea) {
    const fechaActual = new Date().toLocaleDateString();
    const template = document.getElementById("temp");
    const nuevaTarea = template.content.cloneNode(true);
    nuevaTarea.querySelector("p").innerHTML = tarea + " - <strong>" + fechaActual + "</strong>";
    listaTareas.appendChild(nuevaTarea);
  }

  function marcarTareaCompletada(icono) {
    const alerta = icono.parentElement.parentElement;
    const tarea = icono.parentElement.parentElement.querySelector("p");
    alerta.classList.remove("alert-warning");
    alerta.classList.add("alert-success");
    tarea.style.textDecoration = "line-through";
  }

  function eliminarTarea(icono) {
    const tarea = icono.parentElement.parentElement;
    listaTareas.removeChild(tarea);
  }
});
