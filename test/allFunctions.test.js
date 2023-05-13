const Contagem = require('../funcoes/Contagem');
const Fibonacci = require('../funcoes/Fibonacci');
const MDC = require('../funcoes/MDC');
const NumeroPrimo = require('../funcoes/NumeroPrimo');
const Ordenacao = require('../funcoes/Ordenaçao');
const SomaDeConjunto = require('../funcoes/SomaDeConjunto');

//Contagem---------------------------------------------------
describe('Contagem', function() {
test('Contagem de números inteiros(7) e não inteiros(3)', () => {
    const lista = [1, 2, 3.5, 4, 5.6, 6, 7, 8, 9.1, 10];
    const contagem = Contagem(lista);
    expect(contagem.inteiros).toBe(7);
    expect(contagem.naoInteiros).toBe(3);
  });
 
  test('Contagem de números inteiros(4) e não inteiros(6)', () => {
    const lista = [1.9, 2.2, 3, 4.4, 5.6, 6, 7, 8.1, 9.1, 10];
    const contagem = Contagem(lista);
    expect(contagem.inteiros).toBe(4);
    expect(contagem.naoInteiros).toBe(6);
  });
});

  //Fibonacci---------------------------------------------------
  describe('Fibonacci', function() {

  test('os 10 primeiros núneros da contagem de fibonacci devem ser os corretos [0,1,1,2,3,5,8,13,21,34]',()=>{
    expect(Fibonacci(10)).toMatchObject([0,1,1,2,3,5,8,13,21,34]); 
 });
 
 test('os 2 primeiros numeros da contagem de fibonacci devem ser 0 e 1[0,1]',()=>{
     expect(Fibonacci(2)).toMatchObject([0,1]); 
  });
});

 //MDC---------------------------------------------------
  describe('MDC', function() {
  test('MDC de 10 e 25 = 5', () => {
    expect(MDC(10, 25)).toBe(5);
  });
  
  test('MDC de 14 e 28 = 14', () => {
    expect(MDC(14, 28)).toBe(14);
  });
});

  //NumeroPrimo---------------------------------------------------
  describe('NumeroPrimo', function() {
  test('29 é primo', () => {
    expect(NumeroPrimo(29)).toBe(true);
  });
  
  test('30 não é primo', () => {
    expect(NumeroPrimo(30)).toBe(false);
  });
});
//Ordenacao---------------------------------------------------
  describe('Ordenacao', function() {
    it('deve ordenar um array vazio []', function() {
      expect(Ordenacao([])).toEqual([]);
    });
  
    it('deve ordenar um array com um elemento [1]', function() {
      expect(Ordenacao([1])).toEqual([1]);
    });
  
    it('deve ordenar um array com vários elementos [1,1,2,3,3,4,5,5,5,6,9]', function() {
      expect(Ordenacao([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
    });
  });
  //SomaDeConjunto---------------------------------------------------
  describe('SomaDeConjunto', function() {
  it('deve retornar 0 para uma lista vazia [0]', () => {
    expect(SomaDeConjunto([])).toBe(0);
  });

  it('deve retornar o valor da única entrada na lista [42]', () => {
    expect(SomaDeConjunto([42])).toBe(42);
  });

  it('deve somar todos os valores da lista [6], [0], [6]', () => {
    expect(SomaDeConjunto([1, 2, 3])).toBe(6);
    expect(SomaDeConjunto([-1, 0, 1])).toBe(0);
    expect(SomaDeConjunto([2.5, 3.5])).toBe(6);
  });
});

