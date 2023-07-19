// 1. Sigma

function sigma(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        count += i;
        
    }
    return count;
}

console.log(sigma(3));

// 2. Factorial 

function factorial(num) {
    let count = 1;
    for (let i = 1; i <= num; i++) {
        count *= i;
        
    }
    return count;
}


console.log(factorial(3));

// 3. Fibonacci 

function fibonacci(num) {
    
    if (num <= 0) {
        return [];
    }  
    else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }
    else {
        let secuencia = [0,1]
        for (let i = 0; i < num; i++) {
        
        let next = secuencia[i-2] + secuencia[i-1];
        secuencia.push(next);
        
    }
    return secuencia;    
    }
    
}

console.log(fibonacci(3));

// 4. Array: Penúltimo

function penultimo(array) {
    if (array.length < 3) {
        return null;
    } else {
    let penultimo = array.length-2;
    return array[penultimo];
    }
}

console.log(penultimo([42,true,4,"Liam", 7]));

// 5. Array: “N” último

function nUltimo(array, num) {
   let indice = array.length-1-num; 
    if (array.length < num) {
        return null;
    } else {
    
    return array[indice];
    }
}


console.log(nUltimo([5,2,3,6,4,9,7],3));

// 6.Array: Segundo más grande

function segundoNumGrande(array) {
    if (array.length-1<2) {
        return null;
    }
    let primerMayor = numMayor(array); //42
    let indicePrimerMayor = array.indexOf(primerMayor);
    array.splice(indicePrimerMayor,1);
    let respuesta = numMayor(array);
    return respuesta;
}

function numMayor(array) {
    let primerMayor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (primerMayor<array[i]) {
            primerMayor = array[i];
        }
    }
    return primerMayor;
}

console.log(segundoNumGrande([42,1,4,3.14,7]));

// 7. Doble Problema Par

function arrayDuplicado(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        
        newArray.push(array[i]);
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(arrayDuplicado([4, "Ulysses", 42, false]));

// 8. Fibonacci con recursiones

function fib(n) {

    if (n<0) {
       return null; 
    }

    else if (n<=1) {
        return n;
    } else {

    return fib(n-1)+fib(n-2);
    }

}

console.log(fib(3));

