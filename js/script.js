function sumarArray(array) {
    if (array.length === 0) {
        return undefined;
    }

    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            throw new Error(`El valor ${array[i]} no es un número. En realidad su tipo es ${typeof(array[i])}.`);
        }
    }

    let suma = 0;
    
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    
    return suma;
}

function filtrarPares(pares) {
    if (pares.length === 0) {
        return undefined;
    }
    
    for (let i = 0; i < pares.length; i++) {
        if (isNaN(pares[i])) {
            throw new Error(`El valor ${pares[i]} no es un número. En realidad su tipo es ${typeof(pares[i])}.`);
        }
    }
    
    return pares.filter(function (numero) {
        return numero % 2 === 0;
    });
}


function encontrarMaximo(array) {
    if (array.length === 0) {
        return undefined;
    }
    
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            throw new Error(`El valor ${array[i]} no es un número. En realidad su tipo es ${typeof(array[i])}.`);
        }
    }

    let maximo = array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximo) {
            maximo = array[i];
        }
    }
    
    return maximo;
}

function contarOcurrencias(array, valor) {
    if (array.length === 0) {
        return undefined;
    } else if (isNaN(valor)) {
        throw new Error(`El valor ${valor} no es un número. En realidad su tipo es ${typeof(valor)}.`);
    }
    let count = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) {
            count++;
        }
    }
    
    return count;
}


function concatenarArrays(array1, array2) {
    if (array1.length === 0 && array2.length === 0) {
        return undefined;
    } else if (array1.length === 0) {
        return array2;
    } else if (array2.length === 0) {
        return array1;
    }

    return array1.concat(array2);
}

function encontrarMinimo(array) {
    if (array.length === 0) {
        return undefined;
    }

    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            throw new Error(`El valor ${array[i]} no es un número. En realidad su tipo es ${typeof(array[i])}.`);
        }
    }
    
    let minimo = array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minimo) {
            minimo = array[i];
        }
    }
    
    return minimo;
}


function calcularPromedio(array) {
    if (array.length === 0) {   
        return undefined;
    }

    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            throw new Error(`El valor ${array[i]} no es un número. En realidad su tipo es ${typeof(array[i])}.`);
        }
    }

    let suma = sumarArray(array);
    let promedio = suma / array.length;
    return promedio;
}

function copiarArray(array) {
    let newArray = [];
    
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    
    return newArray;
}

let arrayOriginal = [1, 2, 3, 4, 5];
let arrayCopia = copiarArray(arrayOriginal);
console.log(arrayCopia);

function verificarElemento(array, elemento) {
    if (array.length === 0) {
        return undefined;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            console.log(`El elemento ${elemento} existe en el array.`);
            return;
        }
    }
    
    console.log(`El elemento ${elemento} no existe en el array.`);
}

let arrayOriginal2 = [1, 2, 3, 4, 5];
let elemento = 3;
verificarElemento(arrayOriginal2, elemento);

function contarMayores(array, valor) {
    if (array.length === 0) {
        return undefined;
    } else if (isNaN(valor)) {
        throw new Error(`El valor ${valor} no es un número. En realidad su tipo es ${typeof(valor)}.`);
    }

    let contador = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > valor) {
            contador++;
        }
    }
    
    return `Hay ${contador} números mayores a ${valor}.`;
}

let array1 = [1, 3, 5];
let array2 = [2, 4, 6];

let newArray = array1.concat(array2);
newArray.sort();

console.log(newArray);

function duplicarArray(array) {
    if (array.length === 0) {
        return undefined;
    }

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
        newArray.push(array[i]);
    }

    return newArray;
}

function duplicarArray2(array) {
    if (array.length === 0) {
        return undefined;
    }

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(2 * array[i]);
    }

    return newArray;
}

let arrayOriginal3 = [1, 2, 3, 4, 5];
let arrayDuplicado = duplicarArray(arrayOriginal3);
console.log(arrayDuplicado);

let claves = ["nombre", "edad", "ciudad"];
let valores = ["Juan", 25, "Madrid"];

let objetoCombinado = {};

for (let i = 0; i < claves.length; i++) {
     objetoCombinado[claves[i]] = valores[i];
}

console.log(objetoCombinado);

function encontrarPosicion(array, elemento) {
    if (array.length === 0) {
        return undefined;
    } else if (isNaN(elemento)) {
        throw new Error(`El valor ${elemento} no es un número. En realidad su tipo es ${typeof(elemento)}.`);
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return i;
        }
    }
    return "El elemento no se encuentra en el array.";
}

let arrayOriginal4 = [1, 2, 3, 4, 5];
let elementoBuscado = 3;
let posicion = encontrarPosicion(arrayOriginal4, elementoBuscado);
console.log(posicion);

let array3 = [1, 2, 3];
let array4 = [4, 5, 6];
let newArray2 = [];

for (let i = 0; i < array3.length; i++) {
    newArray2.push(array3[i] + array4[i]);
}

console.log(newArray);





