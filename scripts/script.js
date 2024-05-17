// La primera diferencia que notamos es que las variables declaradas con var y con let pueden ser declaradas sin valor inicial (no inicilizadas)
var titulo; // undefined

let descripcion; // undefined

// Const nos obliga a asignarle un valor a la referencia en el momento de la declaración
// No las puedo redeclarar en el mismo bloque de código

// Tipos de datos
const duration = 1000; // Number (Numero) Integer (Entero)
const exactDuration = 1000.12; // Number (Numero con decimales) Float (Flotante)
const technologyName = "Javascript"; // String (Cadena de texto)
const durationString = "1000"; // String (Cadena de texto)
const isOnline = true; // Boolean (Booleano)
const isOffline = false; // Boolean (Booleano)
const data = null; // Null (Nulo) - No tiene valor
const undefinedData = undefined; // Undefined (Indefinido) - No tiene valor
console.log(undefinedData);

// Desde acá
// console.log(perritoMalvado);
//ReferenceError: perritoMalvado is not defined - Porque perritoMalvado nunca fue definida
// hasta acá está el error
// titulo = "Curso de Javascript"; // Asignación de valor a la variable titulo con tipo String

// Hacemos llamado a una de las mejores funciones que tiene Javascript como lenguaje para los desarrolladores -- console.log() -- Función que nos permite imprimir en consola
console.log(titulo);
console.log("Aguante Rolling!");
console.log(descripcion);
console.log(duration);
console.log(exactDuration);
console.log(technologyName);
console.log(durationString);
console.log(isOnline);
console.log(isOffline);
console.log(data);
console.log(undefinedData);

console.log("A ver qué dice el titulo", titulo);
console.log("A ver qué dice la duration", duration);
console.log("A ver qué dice la durationString", durationString);
console.log("A ver qué dice la technologyName", technologyName);
console.log("A ver qué dice la isOnline", isOnline);
console.log("A ver qué dice la isOffline", isOffline);
console.log("A ver qué dice la data", data);
console.log("A ver qué dice la undefinedData", undefinedData);

// Objetos en Javascript (Object)
// Los objetos en Javascript son una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. key: value
const mentorInformation = {
    name: "Fabi",
    lastname: "Tureo",
    age: 30,
    isMarried: false,
    hasPets: true,
    typePets: {
        hasCats: true,
        hasDogs: true,
        hasBirds: false,
    },
    infoPets: [
        {
            petName: "Milo",
            petAgeInMonths: 4,
            type: "cat",
        },
        {
            petName: "Rocco",
            petAgeInMonths: 4,
            type: "cat",
        },
        { petName: "Brenda", petAgeInMonths: 24, type: "dog" },
        { petName: null, petAgeInMonths: undefined, type: "bird" },
    ],
    country: "Argentina",
    city: "San Carlos de Bariloche",
    planesDeCasamiento: undefined,
    planesDeViaje: true,
}; // Object (Objeto)

console.log("Nuestro primer objeto", mentorInformation);

// Array (Arreglo)
// Un array es un _tipo especial de objeto_ que se utiliza para almacenar una colección ordenada de elementos. Se escribe como una lista de valores (elementos) separados por comas y encerrados entre corchetes.

const emptyArray = []; // Array (Arreglo) - Array vacío
const stringsArray = [
    "Javascript",
    "Python",
    "Java",
    "C#",
    "PHP",
    "Rust",
    "C++",
]; // Array (Arreglo) - Array de strings
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array (Arreglo) - Array de números
const booleanArray = [true, false, true, false, true]; // Array (Arreglo) - Array de booleanos
const undefinedArray = [undefined, undefined, undefined]; // Array (Arreglo) - Array de undefined
const mixedArray = ["Javascript", 30, true, null, undefined]; // Array (Arreglo) - Array mixto

console.log("Array vacío", emptyArray);
console.log("Array de strings", stringsArray);
console.log("Array de números", numbersArray);
console.log("Array de booleanos", booleanArray);
console.log("Array de undefined", undefinedArray);
console.log("Array mixto", mixedArray);

// Array de objectos?
const infoPets = [
    {
        petName: "Milo",
        petAgeInMonths: 4,
        type: "cat",
    },
    {
        petName: "Rocco",
        petAgeInMonths: 4,
        type: "cat",
    },
    { petName: "Brenda", petAgeInMonths: 24, type: "dog" },
    { petName: null, petAgeInMonths: undefined, type: "bird" },
];

console.log("Array de objetos", infoPets);

// Operadores aritméticos
// Suma (+) - Precaución porque el signo + también se utiliza para concatenar strings (información)
const numberOne = 10;
const numberTwo = 1205;
const numberThree = 5;
const numberFour = 2;
const numberFive = 3;

// const result = 1500; // Valor hardcodeado - Valor fijo, escrito por el developer - Tiene un problema en general y es que no es dinámico. Si cambia el valor de numberOne o numberTwo, el resultado no se va a actualizar

const result = numberOne + numberTwo; // Variable dinámica - Se actualiza en tiempo real
const total = numberOne + numberTwo + numberThree + numberFour + numberFive;

console.log("El resultado de la suma es: ", result);
console.log("El resultado de la suma total es: ", total);
//console.log(firstValue);
const firstValue = 10; // Number
const secondValue = "perritomalvado"; // String - Si secondValue no está definido y trato de operar como si lo estuviera, Javascript me va a devolver error y va a cortar EL HILO DE EJECUCIÓN DE JAVASCRIPT
console.log("firstValue", firstValue);
const resultSum = firstValue + secondValue;
console.log(firstValue);
console.log("El resultado de la suma es: ", resultSum);

// Esto no es suma aritmética, esto es concatenación de strings
const primerValor = "15";
const segundoValor = "25";
const resultado = primerValor + segundoValor;

console.log("El resultado de la suma es: ", resultado);

// Tenemos disponible una herramienta her-mo-sa: typeof
// Es para determinar de qué tipo es un dato según la variable que le pasemos

console.log("De qué tipo es resultSum?", typeof resultSum);

// Resta (-)
const resultRest = numberTwo - numberOne;
console.log("El resultado de la resta es: ", resultRest);
const reverseResultRest = numberOne - numberTwo;
console.log("El resultado de la resta invertida es: ", reverseResultRest);

// Resta de strings
const resultRestString = primerValor - segundoValor;
console.log("El resultado de la resta de strings es: ", resultRestString);

const resultMixOne = numberOne - primerValor;
console.log("El resultado de la resta mixta 1 es: ", resultMixOne);

const resultMixTwo = numberOne - "perritoMalvado";
console.log("El resultado de la resta mixta 2 es: ", resultMixTwo);

// Multiplicación (*)
const resultMult = numberOne * numberTwo;
console.log("El resultado de la multiplicación es: ", resultMult);
const reverseResultMult = numberTwo * numberOne;
console.log(
    "El resultado de la multiplicación invertida es: ",
    reverseResultMult
);

const resultMultMix = numberOne * "perritoMalvado";
console.log("El resultado de la multiplicación mixta es: ", resultMultMix);

const resultMultString = primerValor * segundoValor;
console.log(
    "El resultado de la multiplicación de strings es: ",
    resultMultString
);

// División (/)
const resultDiv = numberThree / numberFive;
console.log("El resultado de la división es: ", resultDiv);

// Módulo (Resto) (%)
const firstModuleValue = 1400;
const secondModuleValue = 349;
const resultModule = firstModuleValue % secondModuleValue;

console.log("El resultado del módulo es: ", resultModule);

// typeof con los datos que ya tenemos
console.log("De qué tipo es duration?", typeof duration);
console.log("De qué tipo es technologyName?", typeof technologyName);
console.log("De qué tipo es isOnline?", typeof isOnline);
console.log("De qué tipo es data?", typeof data);
console.log("De qué tipo es undefinedData?", typeof undefinedData);
console.log("De qué tipo es mentorInformation?", typeof mentorInformation);

// 123456789

console.log("De qué tipo es numbersArray", typeof numbersArray);

const school = "    Rolling Code School    ";
console.log("El nombre de la escuela es", school);
// const schoolLowerCase = "rolling code school" // Harcodeado
// const schoolUpperCase = "ROLLING CODE SCHOOL" // Harcodeado

// Aplicar métodos en Javascript puedo tener en cuenta su tipo de dato y buscar los métodos disponibles para ese tipo de dato

// Example: nombreVariable.nombreDelMetodoExistente()
// Strings - toLowerCase() - convierte el texto a minusculas

const schoolLowerCase = school.toLowerCase();
console.log("El nombre de la escuela en minusculas es: ", schoolLowerCase);

const schoolUpperCase = school.toUpperCase();
console.log("El nombre de la escuela en mayusculas es: ", schoolUpperCase);

// const schoolTrimmed = school.trim()
// console.log("El nombre de la escuela trimmeado es: ", schoolTrimmed)

const schoolTrimmedStart = school.trimStart();
console.log("El nombre de la escuela trimmeado es: ", schoolTrimmedStart);

// Casteo de Tipos de Datos
const age = 30; // Number
const ageString = String(age);

console.log("Cómo se ve la edad como un string?", ageString);
const ageNumber = Number(ageString);
console.log("Cómo se ve la edad como un numero?", ageNumber);

const person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA",
        geolocalization: {
            lat: "31° 22'",
            long: "22° 31'",
        },
    },
    hobbies: ["reading", "traveling", "cooking"],
    isMarried: false,
};

console.log("person", person);

// Quiero mostrar solo algunas de las propiedades
// En los objetos tenemos el "." como método accesor entre el nombre de la variable y la clave que queremos visualizar.
// variable.property

// Quiero mostrar el nombre
console.log("El nombre de la persona es: ", person.name);
// Expected output (Salida esperada): "John"

// Quiero mostrar la edad
console.log("La edad de la persona es: ", person.age);

// Quiero mostrar es el objeto de la dirección
console.log("La dirección de la persona es: ", person.address);

console.log("La ciudad de la persona es: ", person.address.city); // cortó el hilo de ejecución // Cuando agrego "person." a address.city ya no rompe porque person está declarada, address existe dentro de person y city existe dentro de address

// Quiero mostrar la latitud y la longitud
console.log(
    "La latitud de la persona es: ",
    person.address.geolocalization.lat,
    "y la longitud es: ",
    person.address.geolocalization.long
); // Es mejorable

// Vamos a mejorarlo: Usamos Template Strings - Cadenas Literales - literals - Template literals
// Estos formas de escribir (son las mismas) son las más utilizadas en la actualidad. Nos permiten interpolar variables dentro de un string
// Se escriben con comillas invertidas `` (backticks)
// Las variables se escriben dentro de ${valor-variable}
/* console.log(
    "La latitud de la persona es: ",
    person.address.geolocalization.lat,
    "y la longitud es: ",
    person.address.geolocalization.long
); // Es mejorable */

// Con template Strings
console.log(
    `La latitud de la persona es: ${person.address.geolocalization.lat} y la longitud es: ${person.address.geolocalization.long}`
);

// Un texto un poquito más extenso
const textUser = `El nombre de la persona es ${person.name}, tiene ${person.age} años, vive en ${person.address.city}, ${person.address.country}`;

console.log(textUser);

// Quiero acceder a si es casado
console.log("La persona, ¿es casada?: ", person.isMarried); // Es mejorable

// Quiero acceder a sus hobbies
console.log("¿Cuáles son sus hobbies? ", person.hobbies);

// console.log(person.name, person.age, person.address, person.isMarried, person.hobbies)

// Operadores de comparación
// "=" es operador de asignación
// == (Dos signos de igual) - Compara valores - No tiene en cuenta el tipo de dato - Igualdad débil
// === (Tres signos de igual) - Compara valores y tipos de datos - Igualdad estricta

const ageUser = 30;
const ageStringUser = "30";

console.log("¿Son iguales?", ageUser == ageStringUser);
// Inferí que son iguales porque el valor es el mismo, pero no es estrictamente igual porque uno es string y el otro es number.

console.log("¿Son estrictamente iguales?", ageUser === ageStringUser);
// Porque por más de valen lo mismo luego de la inferencia, no son estrictamente iguales porque uno es string y el otro es number por ende son diferentes tipos de datos

// Condicionales
// Palabras a tener en cuenta: if, else, else if
// if: si pasa esto...
// else: si no, pasa esto...
// else if: si no paso esto (if),  pasa esto... (else if)

// Forma de escribir un condicional
/*/ 
    // Solo con if
    if (condition) {
    // Lo que pasa si el if me da tru
    }

    // Con if y else

    if (condition) {
    // Lo que pasa si el if me da true
    } else {
    // Lo que pasa si el if me da false
    }
*/

// Por qué no entra a esta condición? porque isMarried es false
if (person.isMarried === true) {
    console.log("La persona está casada");
}

// Y por qué acá si entra? porque isMarried es false
if (person.isMarried === false) {
    console.log("La persona no está casada");
}

// if - else
if (person.isMarried === true) {
    console.log("La persona está casada desde el if-else");
} else {
    console.log("La persona no está casada pero desde el else");
}

// Condicionales ternarios
// Es una forma de escribir condicionales de forma más compacta

//Tiene 3 partes
// 1. Condición
// 2. Si la condición es verdadera (true) utilizo el signo de interrogación (?) y escribo lo que quiero que pase
// 3. Si la condición es falsa (false) utilizo los dos puntos (:) y escribo lo que quiero que pase

// Forma de escribir un condicional ternario
// condition ? true : false
// Según si esta casado, quiero que escriba "Si" o "No"
const isAnUserMarried = person.isMarried === true ? "Si" : "No";

console.log("¿Está casado?", isAnUserMarried);
console.log(`¿Está casado? ${isAnUserMarried}`);

// Numeros pares - Resto: 0
// Numeros impares - Resto: 1

// 2 / 2 = 1 - Resto: 0 --> Par --> 2 % 2 = 0
// 3 / 2 = 1 - Resto: 1 --> Impar --> 3 % 2 = 1
// 4 / 2 = 2 - Resto: 0 --> Par --> 4 % 2 = 0
// 5 / 2 = 2 - Resto: 1 --> Impar --> 5 % 2 = 1
// 17 / 2 = 8 - Resto: 1 --> Impar --> 17 % 2 = 1

// const number = 2;
// const number = 3;
const numberToEvaluate = 54687;

// Condicionales
if (numberToEvaluate % 2 === 0) {
    // console.log("El número es par");

    // Template Strings - Me permiten escribir strings con variables dentro
    console.log(`El número ${numberToEvaluate} es par`);
} else {
    console.log(`El número ${numberToEvaluate} es impar`);
}

// Condicionales ternarios
// Javascript moderno - ECMASCRIPT 6
numberToEvaluate % 2 === 0
    ? console.log(
        `El número ${numberToEvaluate} es par desde el condicional ternario`
    ) // Esta es la parte del true
    : console.log(
        `El número ${numberToEvaluate} es impar desde el condicional ternario`
    ); // Esta es la parte del true

// FUNCIONES
// Las funciones son bloques de código que se pueden reutilizar
// Vamos a imaginar que una función "es una cajita mágica" que recibe algo y tiene la capacidad de transformarlo a la salida
// En inglish: even

// Nuestra primera función
// dos formas
// function nombreFuncion() {} - function declaration
// const nombreFuncion = () => {} - arrow function - funcion flecha

// Cuando le asigno () Javascript entiende que a ese nombre le estoy referenciando una función
// Declaración de la función
const helloWorld = () => {
    console.log("Hola Mundo desde una función");
    console.log("Hola Mundo desde una función");
    console.log("Hola Mundo desde una función");
    console.log("Hola Mundo desde una función");
    console.log("Hola Mundo desde una función");
};

// Una función se ejecuta cuando la llamo (la invoco)

// La ejecuto llamando al nombre de la función y utilizando los paréntesis

helloWorld();
helloWorld();

// Función que recibe un parámetro - Es decir, reciben información dentro de los paréntesis

const esPar = (numeroAEvaluar) => {
    // Si no le puedo aplicar parseInt a un string, me va a devolver NaN - Hago esa evaluación y utilizo un if

    // Primero muestro por consola el número que me manda el usuario
    console.log(`El número a evaluar es: ${numeroAEvaluar}`);

    // Evalúo si el número es par o impar
    if (numeroAEvaluar % 2 === 0) {
        console.log(`El número ${numeroAEvaluar} es par`);
    } else {
        console.log(`El número ${numeroAEvaluar} es impar`);
    }
    // Esta función no retorna ninguna información
};

// Llamo a la función pasándole el número que quiero saber si es par o impar por parámetro, es decir, entre los paréntesis
esPar(2);
esPar(3);
esPar(4);
esPar(5);
esPar(17);

// A veces necesitamos que las funciones nos retornen un resultado - return

const greetUser = (username) => {
    // Primero muestro el nombre que recibo por parametro
    console.log(`El nombre del usuario es: ${username}`);

    // Creo una variable con el saludo a mostrar
    const greeting = `Hola ${username}, te damos la bienvenida a RCS`;
    // Retorno un saludo, es decir "le devuelvo" un saludo
    return greeting;
};

// // Llamo a la función pasándole el nombre del usuario que quiero saludar
console.log(greetUser("Yani"));

// Nos muestra undefined ya que la función esPar no retorna ningún valor
console.log(esPar(957));

console.log(greetUser("Cami"));
console.log(greetUser("Franco"));
console.log(greetUser("Rocío"));

// Función que recibe dos parámetros y retorna la suma de ambos
const sum = (value1, value2) => {
    // Tarea: Evaluar si los valores son string, devuelvo un error y no realizo la suma

    console.log("Primer parámetro", value1);
    console.log("Segundo parámetro", value2);
    const result = value1 + value2;

    return result;
};

console.log("El resultado es ", sum(1, 2));
console.log("El resultado es ", sum(5, 92));
console.log("El resultado es ", sum(789465, 125684));

console.log(sum(1, "perritoMalvado"));

esPar("perritoMalvado");

const transformToUpperCaseAndTrim = (text) => {
    const trimmedText = text.trim();
    const toUpperCaseText = trimmedText.toLowerCase();

    return toUpperCaseText;
};

console.log(transformToUpperCaseAndTrim("  Rolling Code School        "));

console.log("Continuamos con funciones");

// 1) Vamos a desarrollar una función que tome un string como parámetro y determine si esa palabra/frase es palíndromos (capicua)
// neuquen - radar - oso - La ruta nos aporto otro paso natural

const isPalindromeExplained = (string) => {
    // Me aseguro que esté llegando el parámetro:
    console.log("A ver el string", string);

    // Transformar la entrada a minusculas/mayusculas
    const textToLowerCase = string.toLowerCase(); // Listo ✔️
    // Vemos si lo transformó -- Opcional
    console.log("A ver si lo pasa a minúsculas", textToLowerCase);

    // Eliminar los espacios al principio y final
    const trimmedText = textToLowerCase.trim();
    // Compruebo si lo hizo
    console.log("¿Le quitó los espacios al principio y al final", trimmedText);

    // Elimino los espacios entre palabras
    // Input: esta es una oracion
    // Output: estaesunaoracion

    // Existe el método .replace()
    // .replace(pattern, replacement)
    // .replace(reemplazaEsto, conEsto)
    // .replace(" ", "")

    // const removeSpacesBetween = trimmedText.replace(" ", "") // CASI PERO NO - INVESTIGAR
    // Vamos a implementar algo un poquito (bastante) más complejo
    // REGEX: Regular Expression - Son expresiones que me permiten evaluar un conjunto de propiedades - Regex para eliminar espacios en blanco: "/\s/g"

    const removeSpacesBetween = trimmedText.replace(/\s/g, ""); // Listo ✔️
    console.log("Removió?", removeSpacesBetween);

    //  Invertimos la lectura del texto
    // const reversedText = removeSpacesBetween.reverse() // No se puede de manera directa entonces vamos a buscarle la vuelta

    const splittedText = removeSpacesBetween.split(""); // Devolvió un array
    console.log("Split devuelve ", splittedText);

    // Ahora sí puedo aplicar reverse
    const reversedText = splittedText.reverse();
    console.log(reversedText);

    const joinedText = reversedText.join("");
    console.log("Texto unido a partir del array dado vuelta", joinedText);

    return removeSpacesBetween === joinedText;
};

console.log(isPalindromeExplained("     PER RiTo MalV ADo     "));
// Output: false
console.log("oSo es palindromo?", isPalindromeExplained("oSo"));
isPalindromeExplained("river"); // Output: false
isPalindromeExplained("Neuquen"); // Output: true
// "Neuquen" !== "neuquen"
isPalindromeExplained("La ruta nos aporto otro paso natural");

const isPalindrome = (string) => {
    const textToLowerCase = string.toLowerCase(); // Listo ✔️
    const trimmedText = textToLowerCase.trim();
    const removeSpacesBetween = trimmedText.replace(/\s/g, ""); // Listo ✔️

    const splittedText = removeSpacesBetween.split(""); // Listo ✔️
    const reversedText = splittedText.reverse(); // Listo ✔️
    const joinedText = reversedText.join(""); // Listo ✔️

    return removeSpacesBetween === joinedText;
};

// "11" == 11 // true - Porque no compara tipos de datos y el valor es el mismo
// "11" === 11 // false - Porque compara tipos de datos y el valor es el mismo mientras que los tipos de datos son diferentes
