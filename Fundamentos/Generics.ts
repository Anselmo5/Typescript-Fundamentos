function ident<T>(pass1:T): T{
    console.log(typeof pass1)
    return pass1;
    
}

console.log(ident('asda'));
console.log(ident(1));



function ident2<T>(pass1:T): T{
    console.log(typeof pass1)
    return pass1;
    
}

console.log(ident2 <String>('asda'));
console.log(ident2 <Number>(1));

//Mas claro que também podemos determar o tipo do componente quanfo for invocar a função