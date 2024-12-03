# Documentación: Ejercicio getValue

## HTML: Estructura del Documento

1. **Crear un formulario con los siguientes elementos:**

   - Un `input` con un `id` para seleccionar desde JavaScript.
   - Un `button` con un evento que llame a la función `getValue`.

2. **Agregar un contenedor para mostrar resultados (opcional):**
   - Un `div` o `p` con un `id` donde se mostrará el texto retornado.

### Ejemplo de HTML:

```html
<form id="form">
  <label for="input">Ingrese un valor:</label>
  <input type="number" id="input" placeholder="Escribe un número" />
  <button type="button" id="checkButton">Revisar</button>
</form>
<div id="result"></div>
```

## JavaScript: Funcionalidad

Pasos:

1. Crear la función getValue:

- Parámetros
  - Selector: Selector CSS para identificar el input.
  - Threshold: Número con el cual comparar el valor del input.
- Lógica:
  - Usar document.querySelector para obtener el input.
  - Convertir el valor del input a número.
  - Retornar "mucho", "exacto" o "muy poco" según la comparación.

2. Agregar un evento al botón:

- Usar addEventListener para capturar el clic del botón.
- Llamar a la función getValue con los parámetros necesarios.
  Mostrar el resultado en un div o en la consola.
