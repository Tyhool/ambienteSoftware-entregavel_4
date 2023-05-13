function Contagem(lista) {
    let contadorInt = 0;
    let contadorFlo = 0;
  
    for (let i = 0; i < lista.length; i++) {
      if (Number.isInteger(lista[i])) {
        contadorInt++;
      } else {
        contadorFlo++;
      }
    }
  
    return { inteiros: contadorInt, naoInteiros: contadorFlo };
  }

module.exports = Contagem;