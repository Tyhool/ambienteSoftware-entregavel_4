function Ordenacao(array) {
    if (array.length < 2) {
      return array;
    }
  
    const pivotIndex = Math.floor(Math.random() * array.length);
    const pivot = array[pivotIndex];
  
    const less = [];
    const greater = [];
  
    for (let i = 0; i < array.length; i++) {
      if (i === pivotIndex) {
        continue;
      }
  
      if (array[i] < pivot) {
        less.push(array[i]);
      } else {
        greater.push(array[i]);
      }
    }
  
    return [...Ordenacao(less), pivot, ...Ordenacao(greater)];
  }
  
  module.exports = Ordenacao;