// -1- Ejercicios destructuring
// 1.1 Dado el siguiente objeto:
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

// Extrae la empleada Ana completa
// {"name":"Ana", "email":"Ana@gmail.com"}

let [, ana,] = empleados;

// Extrae el email del empleado Luis --> Luis@gmail.com

const { email } = empleados[0];
// 1.2 Usa destructuración para intercambiar los valores de a y b
// Inicialmente
let a = 5;
let b = 3;
[a, b] = [b, a];


// Al final
// let a = 3;
// let b = 5;

// 1.3 Dado el siguiente objeto:

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

// Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana
// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;
// console.log(maximaHoy);
// console.log(maximaManana);


const {today} = HIGH_TEMPERATURES;
const maximaHoy = today;

const {tomorrow} = HIGH_TEMPERATURES;
const maximaManana = tomorrow;
// 2.2 Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
    
// addOnlyNums(1, "perro", 2, 4); //7

function addOnlyNums (...nums) {
    
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] !== 'string') { 
            total += nums[i] 
        }
    }
    return total;
}

// 3. Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

// countTheArgs("gato", "perro"); //2
// countTheArgs("gato", "perro", "pollo", "oso"); //4

const countTheArgs = ((...rest) => rest.length)
// 4. Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

function combineTwoArrays(arr, arr2) {
    let twoArr = [
        ...arr,
        ...arr2,
    ]
    return twoArr;
}

// 5. Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

// onlyUniques("gato", "pollo", "cerdo", "cerdo"); //['gato', 'pollo', 'cerdo']
// onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

function onlyUniques(...uniques) {
    let unicos = uniques.filter((element,index)=>uniques.indexOf(element) === index);
    return unicos;
}
// 6. Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

//combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
//combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

function combineAllArrays(...arr) {
    return arr.flat();
}
//Sin metodo

function combineAllArrays(...arrays) {
    let result = [];

    for (let i = 0; i < arrays.length; i++) {
        //arrays[i] --> cada array
        result = [...result,...arrays[i]];
    }
    return result;
}

//7. Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
function sumAndSquare (...rest) {
    let sum = 0;
    const cuadrados = rest.map ((num) => num*num)
    sum = cuadrados.reduce((acc,val) => acc + val,0)
}