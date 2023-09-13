/* ------------ BUBBLESORT ------------ */

//Creamos un arreglo de numeros desordenados
let numeros = [6, 5, 1, 2, 4, 3, 8, 7];

// el primer bucle solamente sirve para iterar el arreglo tantas veces como cada elemento que haya
for (let i = 0; i < numeros.length; i++) {
// el segundo for o bucle anidado nos sirve para nuestro ordenamiento, tanto ascendente o descendente
	for (let j = 0; j < numeros.length; j++) {
        
		if (numeros[j] > numeros[j + 1]) {
            //Si se cumple la condicion, quiero que lo que hay en numeros[j] intercambie con el siguiente valor
			let temp = numeros[j];
            //y lo que tenia en numeros [j + 1] sea el umero valor de temp
			numeros[j] = numeros[j + 1];
			numeros[j + 1] = temp;
		}
	}
}

console.log(numeros);




/* --------------------------- */

//Ordenar alfabeticamente
let letras = ["Camila","Zoe", "Ana", "Lucrecia", "Anabela"];

for (let i = 0; i < letras.length; i++) {
    // el segundo for o bucle anidado nos sirve para nuestro ordenamiento, tanto ascendente o descendente
        for (let j = 0; j < letras.length; j++) {
            
            if (letras[j] > letras[j + 1]) {
                //Si se cumple la condicion, quiero que lo que hay en letras[j] intercambie con el siguiente valor
                let temp = letras[j];
                //y lo que tenia en letras [j + 1] sea el umero valor de temp
                letras[j] = letras[j + 1];
                letras[j + 1] = temp;
            }
        }
    }
    
    console.log(letras);


let personas = [
    {
      nombre: "Dua",
      apellido: "Lipa",
      ocupacion: "cantante",
      estatura: 173,
    },
    {
      nombre: "Ariana",
      apellido: "Grande",
      ocupacion: "cantante",
      estatura: 160,
    },
    {
      nombre: "Taylor",
      apellido: "Swift",
      ocupacion: "cantante",
      estatura: 180,
    }
];
/*
for(let i=0 ; i<personas.length ; i++){
    for(let j=0 ; j<personas.length - 1 ; j++){
        if(personas[j].estatura < personas[j+1].estatura){
            let aux = personas[j];
            personas[j] = personas[j+1];
            personas[j+1] = aux;
        }
    }
}
*/
//console.log(personas);



//Crear una funcion que agrege al array un nuevo objeto y los ordene dada su estatura
function armarArreglo(arreglo){
    arreglo.push({
        nombre: "Diomedes",
        apellido: "Diaz",
        ocupacion: "cantante",
        estatura: 170,
    });
    for(let h=0 ; h<arreglo.length ; h++){
        for(let i=0 ; i< arreglo.length - 1 ; i++){
            if(arreglo[i].estatura > arreglo[i+1].estatura){
                let aux = arreglo[i];
                arreglo[i] = arreglo[i+1];
                arreglo[i+1] = aux;
            }
        }
    }
    return arreglo;
}
//console.log(armarArreglo(personas));



/*Crear una funcion que reciba por parametro un arreglo y un string.
Si el string es "ASC" debera ordenar el arreglo de forma ascendente
Si el stringen cambio es "DES" debera ordenarlo de forma descendente */
function ordenarAscPorEstatura(arreglo){
    for(let h=0 ; h<arreglo.length ; h++){
        for(let i=0 ; i< arreglo.length - 1 ; i++){
            if(arreglo[i].estatura > arreglo[i+1].estatura){
                let aux = arreglo[i];
                arreglo[i] = arreglo[i+1];
                arreglo[i+1] = aux;
            }
        }
    }
    return arreglo;
}
function ordenarDesPorEstatura(arreglo){
    for(let h=0 ; h<arreglo.length ; h++){
        for(let i=0 ; i< arreglo.length - 1 ; i++){
            if(arreglo[i].estatura < arreglo[i+1].estatura){
                let aux = arreglo[i];
                arreglo[i] = arreglo[i+1];
                arreglo[i+1] = aux;
            }
        }
    }
    return arreglo;
}
function ordenarArray(arreglo, string){
    string = string.toUpperCase();
    if(string === "ASC"){
        let arregloOrdenado = ordenarAscPorEstatura(arreglo);
        return arregloOrdenado;
    }
    if(string === "DES"){
        return ordenarDesPorEstatura(arreglo);
    }
    else{
        let aux = "No fue encontrado su codigo";
        return aux;
    }
}
console.log(ordenarArray(personas,"asc"));
//console.log("asc".toUpperCase());