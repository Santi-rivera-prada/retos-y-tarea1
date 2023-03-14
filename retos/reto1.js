function palindrome(text) {
    // Convertir todo el texto a minúsculas y eliminar espacios en blanco y signos de puntuación
    text = text.toLowerCase().replace(/\s/g, "").replace(/[^a-zA-Z0-9]/g, "");
  
    // Comparar el texto original con su inverso
    if (text === text.split("").reverse().join("")) {
      return true;
    } else {
      return false;
    }
  }

  
  console.log(palindrome("ana")); 
console.log(palindrome("Amor a Roma")); 
console.log(palindrome("A Toyota's a toyota")); 
console.log(palindrome("No deseo ese don")); 
console.log(palindrome("Hola mundo")); 
console.log(palindrome("¿Acaso hubo búhos acá?")); 
console.log(palindrome("¡Oh, no! Don Evaristo hizo eso de veo tan odioso")); 


