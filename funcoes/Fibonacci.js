function Fibonacci(quantidade_numeros){

let n1,n2,sucessor;
n1 = 0;
n2 = 1;

if(quantidade_numeros <=0){
    return[]
}else if (quantidade_numeros == 1){
    return [0]
}else if (quantidade_numeros == 2){
    return [0,1]
}

numeros = [0,1]

for (let i = 2; i < quantidade_numeros; i++){
    sucessor = n1 + n2;
    n1 = n2;
    n2 = sucessor;
    numeros.push(sucessor);
}
return numeros


}
module.exports = Fibonacci;