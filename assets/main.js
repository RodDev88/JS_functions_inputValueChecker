//1. Definición de function getValue con dos params
    //selector: Es un parámetro que espera un selector CSS como #id o .clase para identificar un elemento en el DOM.
    //threshold: Es un parámetro que representa el valor contra el cual se comparará el valor ingresado en el input.
function getValue(selector, threshold) {

//2. Seleccionar el elemento del input:
    //document.querySelector(selector) busca el primer elemento en el DOM que coincida con el selector CSS proporcionado.
    //El resultado se almacena en la constante inputElement.
    const inputElement = document.querySelector(selector);

//3. Obtener y convertir el valor del input:
    //inputElement.value obtiene el valor ingresado en el input como texto.
    //parseFloat() convierte ese texto en un número decimal.
    //El resultado se guarda en la constante value.
    const value = parseFloat(inputElement.value);
  
//4.Validación de entrada con condicional simple
    //isNaN(value) verifica si el valor no es un número.
    //Si es verdadero, la función retorna un mensaje de error, deteniendo su ejecución.
    if (isNaN(value)) {
      return "Por favor, ingrese un número válido";
    }

//5.Condicional múltiple con las comparaciones del inputvalue con el threshold
    if (value > threshold) {
      return "Es mucho lucho";
    } else if (value === threshold) {
      return "Es exacto, wenazo";
    } else {
      return "Mmmmhhh, es muy poco";
    }
  }
  
//6.Agregar un evento al botón:
    //document.getElementById("checkButton") selecciona el botón con el ID checkButton.
    //addEventListener("click", ...) agrega un evento que se activa cuando el usuario hace clic en el botón.
  document.getElementById("checkButton").addEventListener("click", () => {
//7. Llamar a la función getValue con dos argumentos:
    //"#input": Selector CSS para identificar el input.
    //10: El valor que se usa como referencia (threshold).
    //El resultado de la función se almacena en la constante result.
    const result = getValue("#input", 10);

//8. Mostrar el resultado en el DOM:
    //document.getElementById("result") selecciona el elemento con el ID result.
    //innerText actualiza el contenido del elemento con el texto almacenado en result.

    document.getElementById("result").innerText = result;
  });
  