// function arrayHasta(num) {
//     var array = [];
//     for (let i = 0; i <= num; i++) {
//         array.push(i);
        
//     }

//     return array;
// }

// console.log(arrayHasta(255));

// function SumaParesHasta(num) {
//     var sum = 0;
//     for (let i = 0; i <= num; i++) {
//        if (i%2==0){
//         sum+=i;
//        }
        
//     }
//     return sum
// }

// console.log(SumaParesHasta(1000));

// function SumaImparesHasta(num) {
//     var sum = 0;
//     for (let i = 0; i <= num; i++) {
//        if (i%2!==0){
//         sum+=i;
//        }
        
//     }
//     return sum
// }

// console.log(SumaImparesHasta(5000));

// function sumArray(array) {
//     var sum = 0;   
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum
// }

// console.log(sumArray([-5,2,5,12]));

// function mayorArray(array) {
//     var max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if(max < array[i])
//         {max = array[i]}
//     }

//     return max
// }

// console.log(mayorArray([-3,3,5,7]));

// function promArray(array) {
//     var sum = 0;
//     var prom = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     prom = sum/array.length;
//     return prom
// }

// console.log(promArray([1,3,5,7,20]));

// function arrayHasta(num) {
//     var array = [];
//     for (let i = 0; i <= num; i++) {
//         if (i%2!==0){
//         array.push(i);
//         }
//     }

//     return array;
// }

// console.log(arrayHasta(50));

// function mayorQue(array, y) {
//     var temp = [];
//     for (let i = 0; i < array.length; i++) {
//         if(y<array[i]){
//             temp.push(array[i]);
//         }
        
//     }
//     return temp
// }

// console.log(mayorQue([1,3,5,7], 3));

// function cuadradoArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i]*=array[i];
        
//     }
//     return array
// }

// console.log(cuadradoArray([1,5,10,-2]));

// function negativoCero(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < 0){
//             array[i]=0;
//         }
        
//     }
//     return array
// }

// console.log(negativoCero([1,5,10,-2]));

function maxMinAvg(array) {

    var newArray = [];

    function mayorArray() {

        var max = array[0];
        for (let i = 1; i < array.length; i++) {
        if(max < array[i])
        {max = array[i]}
        }
        return max   
    }

    function menorArray() {

        var min = array[0];
        for (let i = 1; i < array.length; i++) {
        if(min > array[i])
        {min = array[i]}
        }
        return min   
    }

    function promArray() {
        var sum = 0;
        var prom = 0;
        for (let i = 0; i < array.length; i++) {
        sum += array[i];
        }
        prom = sum/array.length;
        return prom
    }
    
    newArray.push(mayorArray());
    newArray.push(menorArray());
    newArray.push(promArray());
    return newArray;
}

// console.log(maxMinAvg([1,5,10,-2]));

// function interVal(array) {
//     var temp = 0;
    
//         temp = array [array.length-1];
//         array [array.length-1] = array[0];
//         array[0] = temp;       
    

//     return array
// }

// console.log(interVal([1,5,10,-2]));

// function numString(array){
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]<0) {
//             array[i]= "Dojo";
//         }
        
//     }

//     return array
// }

// console.log(numString([-1,-3,2]));