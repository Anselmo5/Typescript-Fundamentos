function ident<T>(pass1:T): T{
    console.log(typeof pass1)
    return pass1;
    
}

console.log(ident('asda'));
console.log(ident(1));

