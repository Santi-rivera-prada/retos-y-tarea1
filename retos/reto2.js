function longestCountry(paises) {
    let paisMasLargo = '';
    for (let i = 0; i < paises.length; i++) {
      if (paises[i].length > paisMasLargo.length) {
        paisMasLargo = paises[i];
      }
    }
    return paisMasLargo;
  }

  
  const paises = ["México", "Panamá", "Guatemala", "El Salvador", "COLOMBIA"];
console.log(longestCountry(paises)); //el salvador
