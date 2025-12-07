//API para obtener la lista de tareas
const API_URL = "https://jsonplaceholder.typicode.com/todos";

//Etiqueta con ID para agregar tareas a la tabla
const taskBody = document.getElementById("task-body");

//Eqiueta con ID para mostrar un mensaje de carga mientras se obtiene la lista de tareas.
const loadingText = document.getElementById("loading");

//Etiqueta con ID para el formualrio de agregar tareas
const taskForm = document.getElementById("task-form");

//Etiqueta con ID para agregar el titulo de la tarea
const taskTitleInput = document.getElementById("task-title");

//Etiqueta con ID para conocer el estado del checkbox y actualizarlo
const taskCompletedInput = document.getElementById("task-completed");

// Función para agregar una fila a la tabla de tareas
function addTaskToTable(task) {
  const tr = document.createElement("tr");

  const titleTd = document.createElement("td");
  titleTd.textContent = task.title;

  const statusTd = document.createElement("td");
  statusTd.textContent = task.completed ? "Si" : "No";

  tr.appendChild(titleTd);
  tr.appendChild(statusTd);

  //Metodo para agregar al tope de la tabla
  taskBody.prepend(tr);
}

// Funcion asincrona para cargar las primeras 10 tareas
async function loadTasks() {
  try {
    const res = await fetch(`${API_URL}?_limit=10`);
    const tasks = await res.json();

    //Se borra el contenido la etiqueta de carga a una vacia para comenzar a cargar las tareas a la tabla
    loadingText.style.display = "none";

    tasks.forEach(addTaskToTable);
  } catch (error) {
    loadingText.textContent = "Error al cargar las tareas.";
  }
}

// Se define el listener y las acciones que se realizaran en Javascript 
// al presionar el boton de submit al agregar una tarea.
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  //Validacion para la longitud del titulo de la tarea
  if (taskTitleInput.value.trim().length < 3) {
    alert("El título debe tener al menos 3 caracteres.");
    return;
  }

  //Se crea una nueva tarea
  const newTask = {
    title: taskTitleInput.value.trim(),
    completed: taskCompletedInput.checked
  };

  //Se simula el envio de la nueva tarea a la API
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTask)
  });
  //Se espera la respuesta de la solicitud
  const createdTask = await res.json();
  //Se agrega la tarea a la tabla
  addTaskToTable(createdTask);
  //Se muestra la alerta de que la tarea fue agregada correctamente
  alert("¡Tarea agregada correctamente!");
  //Se vuelve a colocar el titulo del formulario vacio
  taskTitleInput.value = "";
  taskCompletedInput.checked = false;
});

// Mostrar "Cargando..." por 5 segundos antes de cargar tareas e Iniciar carga de tareas
setTimeout(() => {
  loadTasks();
}, 5000);
