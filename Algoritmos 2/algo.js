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

// 4. Doble Visión 

function dobleVision(array) {
    let newArray = array;
    for (let i = 0; i < newArray.length; i++) {
        newArray[i]*=2;
        
    }
    return newArray
}

console.log(dobleVision([1,2,3]));

// 5. Contar Positivos

function contarPositivos(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]>0) {
            count++
            
        }
        
    }

    array[array.length-1] = count;
    return array
}

console.log(contarPositivos([-1,1,1,1]));

// 6. Pares e Impares

function paresEImpares(array) {
    let countPar = 0;
    let countImpar = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2 == 0) {
            countPar++
            countImpar = 0;
            if (countPar !== 0 && countPar%3 == 0) {
                console.log("¡Qué imparcial!");
            }
        }
        else if (array[i]%2 !== 0) {
            countImpar++
            countPar = 0;
        } 
        if (countImpar !== 0 && countImpar%3 == 0) {
            console.log("¡Es para bien!");
        }
    }
}

console.log(paresEImpares([-1,1,1,1]));



// 7. Incrementa los Segundos

function incrementaSegundos(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(i%2 !== 0) {
        arr[i]++;}
        console.log(arr[i]);
    }
    return arr;
}

console.log(incrementaSegundos([-1,1,1,3]));

// 8. Longitudes previas

function longitudPrevia(array) {
    for (let i = 0; i < array.length; i++) {
        let palabra = array[i];
        console.log(palabra);
        // array[i+1]=palabra.length;
        
    }
    return array;
}

console.log(longitudPrevia(["programar","dojo", "genial"]));

// 9. Agrega Siete

function sumar7(array) {
    let newArray = array;
    for (let i = 0; i < newArray.length; i++) {
        newArray[i]+=7;
        
    }
    return newArray
}

console.log(sumar7([1,2,3]));

// 10. Array Inverso

function arrayInverso(array) {
    let newArray = [];
    for (let i = array.length-1; i >= 0; i--) {
        newArray.push(array[i]);
        
    }
    return newArray;
}

console.log(arrayInverso([3,1,6,4,2]));

// 11. Perspectiva: Negativa

function todosNumNegativos(array) {
    let newArray = array
        for (let i = 0; i < newArray.length; i++) {
        if (newArray[i]>0) {
            newArray[i]*=-1;
        }
        
    }
    return newArray;
}

console.log(todosNumNegativos([1,-3,5]));

// 12. Siempre hambriento

function comidaEsYummy(array) {
    let encontrado =  false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "comida") {
            console.log("yummy");
            encontrado = true;
        } 
        
    }
    if (encontrado == false) {
        console.log("tengo hambre"); 
    }
    
}

console.log(comidaEsYummy([1,-3,5,"comida"]));

// 13. Cambiar hacia el centro

function cambiarHaciaAlCentro(array) {
    
    
    for (let i = 0; i < array.length/2; i++) {
        if (i%2 !== 0) {
            let temp = array[i];
        array[i] = array[array.length-1-i];
        array[array.length-1-i] = temp;
        }
        
        
    }
    return array;
}

console.log(cambiarHaciaAlCentro([true, 42, "Ada", 2, "pizza"]));

// 14. Escala el Array

function escalaArray(arr,num) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *=num;
        
    }
    return arr;
}

console.log(escalaArray([1,2,3], 3));