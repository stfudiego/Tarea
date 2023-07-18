// 1 Tamaño Grande

function tamañoGrande(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]>0) {
            array[i] = "big";
        };
        
    }
    return array;
}

console.log(tamañoGrande([-1,3,5,-5]));

// 2.Imprime (print) el menor, devuelve (return) el mayor

function imprimeMenorDevuelveMayor(array) {
    let menor = 0;
    let mayor = 0;
    mayor = numMayor(array); //5
    menor = numMenor(array); //-5
    console.log(menor);
    return mayor;
}

console.log(imprimeMenorDevuelveMayor([-1,3,5,-5]));

function numMayor(array) {
    let mayor = -1;
    for (let i = 0; i < array.length; i++) {
        
        if (array[i]>mayor) {
            mayor = array[i];
        };
        
    }
    return mayor;
}

function numMenor(array) {
    let menor = 0;
    for (let i = 0; i < array.length; i++) {
        
        if (array[i]<menor) {
            menor = array[i];
        };
        
    }
    return menor;
}

// 3. Imprime (print) uno, devuelve (return) otro

function imprimeMenorDevuelveMayor(array) {
    let a = 0;
    let b = 0;
    a = penultimoNum(array); 
    b = primerImpar(array); 
    console.log(a);
    return b;
}

console.log(imprimeMenorDevuelveMayor([-1,2,3,4,5,-5]));

function penultimoNum(array) {
    let penultimoNum =array[array.length-2];
    return penultimoNum;
}

function primerImpar(array) {
    let primerImpar = array[0];
    
        for (let i = 0; i < array.length; i++) {
        if(array[i]%2 !== 0){
            array[i] = primerImpar;
        }
        }
    
    return primerImpar;
}

