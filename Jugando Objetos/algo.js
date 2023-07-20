var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

// 1. ¿Cómo harías print/log de la edad de John?

var persona2 = users[1]
console.log(persona2.age);

// 2.¿Cómo harías print/log del nombre del primer objeto?

var persona1 = users[0]
console.log(persona1.name);

// 3. ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto

for (let i = 0; i < users.length; i++) {
    let persona = users[i];
    console.log(persona.name + " - " + persona.age);
}

// 4. ¿Cómo harías para imprimir el nombre de los mayores de edad?

let mayorEdad = 18;
for (let i = 0; i < users.length; i++) {
    let persona = users[i];
    if (mayorEdad <= persona.age) {
        console.log(persona.name);
    }
}