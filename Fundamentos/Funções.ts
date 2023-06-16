function somar(x: number, y: number ): number { //Aqui temos um erro onde estamos passando como parametro valores com number, mas so que no codigo temos uma string, então temos que colocar na função uma condição que pegue duas condições formas em uma so
    return x + y ;
}


// tipos de entradas
// um unico tipo de saida

console.log( somar(5,6));
console.log(somar(5,4));

