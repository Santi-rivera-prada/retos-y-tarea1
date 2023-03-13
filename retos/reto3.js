function farenheitToCelsius(gradosFarenheit) {
    let gradosCelsius = (gradosFarenheit - 32) * 5 / 9;
    return gradosCelsius;
  }

  
  console.log(farenheitToCelsius(32)); // 0
console.log(farenheitToCelsius(68)); // 20
console.log(farenheitToCelsius(100)); // 37.77777777777778
