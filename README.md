# 📝 Tarea Corta: Gestor de Tareas con API

## Información del Proyecto

- **📚 Tema:** Gestión de Formularios y Fetch API
- **🎯 Nivel:** Básico
- **⏱️ Tiempo estimado:** 2-3 horas
- **📅 Entrega:** Repositorio de GitHub (solo el link)

---

## 🎯 Objetivo

Crear una aplicación web simple que permita **visualizar tareas existentes** y **agregar nuevas tareas** utilizando la API pública de JSONPlaceholder.

### 💡 Aprenderás a:

- Crear formularios HTML básicos
- Validar datos con JavaScript
- Hacer peticiones GET y POST con Fetch API
- Mostrar datos dinámicamente en el DOM

---

## 📋 Descripción del Proyecto

Debes crear una página web que muestre una lista de tareas y permita agregar nuevas tareas mediante un formulario.

### API a utilizar

```
API base
https://jsonplaceholder.typicode.com

Endpoints que usarás:
GET    /todos?_limit=10    → Obtener 10 tareas
POST   /todos              → Crear nueva tarea
```

> **⚠️ Importante:** JSONPlaceholder es una API de prueba. Las operaciones POST se simulan pero no modifican la base de datos real. Tu aplicación debe manejar las respuestas y actualizar la interfaz visual correctamente.

---

## ✅ Requisitos Funcionales

### 1. Mostrar Lista de Tareas (GET)

**Funcionalidad:**

- Al cargar la página, obtener automáticamente las primeras 10 tareas
- Usar `fetch()` con la URL: `https://jsonplaceholder.typicode.com/todos?_limit=10`
- Cada tarea debe mostrar:
  - Título de la tarea
  - Estado: completada (✅) o pendiente (⬜)
- Mostrar un mensaje "Cargando..." mientras se obtienen los datos

### 2. Formulario para Nueva Tarea (POST)

**Campos del formulario:**

- `Título`: Input de texto (obligatorio, mínimo 3 caracteres)
- `Completada`: Checkbox (opcional, por defecto no marcado)
- Botón "Agregar Tarea"

**Validación:**

- El título no puede estar vacío
- El título debe tener al menos 3 caracteres
- Mostrar mensaje de error si la validación falla
- Usar `e.preventDefault()` para evitar recarga de página

**Al enviar el formulario:**

- Hacer petición POST a `https://jsonplaceholder.typicode.com/todos`
- Enviar datos en formato JSON con: title, completed, userId: 1
- Agregar la nueva tarea al **inicio** de la lista (sin recargar la página)
- Limpiar el formulario después de agregar
- Mostrar mensaje de éxito (alert o div)

### Ejemplo de código POST

```javascript
// Crear nueva tarea
const nuevaTarea = {
  title: "Mi nueva tarea",
  completed: false,
  userId: 1
};

const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(nuevaTarea)
});

const resultado = await response.json();
console.log(resultado); // Tarea creada con ID
```

---

## 💻 Requisitos Técnicos

- ✅ Usar **JavaScript vanilla** (no frameworks)
- ✅ Usar **async/await** para fetch
- ✅ Usar **addEventListener** para eventos
- ✅ HTML semántico (form, input, button, ul/ol, li)
- ✅ CSS básico para que se vea presentable
- ✅ Código comentado en las partes importantes

---

## 🎨 Requisitos de Interfaz

- Interfaz simple y funcional
- Indicador visual de carga ("Cargando..." o similar)
- Diferenciación visual entre tareas completadas y pendientes
- Mensajes de error y éxito claramente visibles
- Formulario con labels apropiados

---

## 📦 Estructura de Archivos

```
mi-gestor-tareas/
├── index.html          ← Estructura HTML
├── styles.css          ← Estilos CSS (opcional, puedes usar <style>)
├── script.js           ← Lógica JavaScript
└── README.md           ← Descripción del proyecto
```

### 📝 README.md debe incluir:

- Título del proyecto
- Descripción breve (2-3 líneas)
- Instrucciones de uso (cómo abrir el proyecto)
- Funcionalidades implementadas

---

## 📤 Instrucciones de Entrega

1. Crear un repositorio público en GitHub
2. Subir todos los archivos del proyecto
3. Asegurarte de que funcione correctamente
4. **Entregar ÚNICAMENTE el link del repositorio de GitHub**

### ✅ Formato de entrega:

Solo el link del repositorio:

```
https://github.com/tu-usuario/gestor-tareas-simple
```

---

## 📊 Criterios de Evaluación

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Cargar y mostrar tareas (GET)** | 30% | - Fetch correcto al cargar la página<br>- Renderizado de la lista con título y estado<br>- Manejo de loading |
| **Formulario HTML** | 20% | - Campos correctos (título, checkbox)<br>- Labels apropiados<br>- Botón de envío<br>- Uso de preventDefault() |
| **Validación básica** | 15% | - Validar que título no esté vacío<br>- Validar mínimo 3 caracteres<br>- Mostrar mensaje de error |
| **Crear tarea (POST)** | 20% | - Petición POST correcta<br>- Headers y body apropiados<br>- Agregar tarea a la lista<br>- Limpiar formulario |
| **Interfaz y presentación** | 10% | - CSS básico aplicado<br>- Interfaz funcional y clara<br>- Feedback visual apropiado |
| **Código y organización** | 10% | - Código comentado<br>- Nombres de variables claros<br>- Estructura organizada<br>- Uso de async/await |
| **README y repositorio** | 5% | - README.md completo<br>- Repositorio organizado<br>- Proyecto funcional |

**Total: 100%**

---

## 💡 Consejos

- **Empieza por el GET:** Primero haz que cargue y muestre las tareas
- **Luego el formulario:** Crea el HTML del formulario con validación básica
- **Finalmente el POST:** Implementa la creación de tareas
- **Usa console.log():** Para ver las respuestas de la API
- **Prueba frecuentemente:** Verifica cada funcionalidad antes de continuar
- **Pregunta si tienes dudas:** Es mejor preguntar que avanzar en dirección incorrecta

---

## 🔗 Recursos Útiles

- **API JSONPlaceholder:** https://jsonplaceholder.typicode.com/
- **MDN - Fetch:** https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
- **MDN - async/await:** https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function
- **MDN - Forms:** https://developer.mozilla.org/es/docs/Learn/Forms

---

## ❓ Preguntas Frecuentes

### ¿Puedo usar Bootstrap o Tailwind?

**Sí,** puedes usar frameworks CSS si quieres, pero no es necesario. Un CSS simple es suficiente.

### ¿Las tareas que creo se guardan realmente?

**No,** JSONPlaceholder es una API de prueba que simula las respuestas pero no guarda datos realmente. Esto es normal y esperado.

### ¿Debo usar try/catch?

**Es recomendable** pero no obligatorio para esta versión corta. Si quieres hacerlo más robusto, úsalo.

### ¿Cuántas tareas debo cargar?

Carga **10 tareas** usando `?_limit=10` en la URL del GET.

### ¿Necesito validación en tiempo real?

**No,** para esta versión corta basta con validar al momento de enviar el formulario.

---

## 🎉 ¡Mucho éxito con tu proyecto!

Esta tarea te introducirá a los conceptos básicos de formularios y APIs.

---

*📚 Web Fundamentals - Gestión de Formularios (Versión Corta)*
