
// Dado un array con los datos de una encuesta realizada sobre los temas musicales más populares —lo que se tiene en el array son objetos definidos con el nombre de un tema musical y cantidad de votos que obtuvo— crear el array con los datos de 5 temas, crear los objetos con los temas que prefieran, y una cantidad de votos para cada uno.
// Los votos obtenidos están desordenados.
// Escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo.
// Resolverlo aplicando búsqueda lineal.
// Resolverlo aplicando búsqueda binaria.

const temas = [
    {
      tema: "Arrasando",
      cantidadVotos: 230,
    },
    {
      tema: "Azul",
      cantidadVotos: 1230,
    },
    {
      tema: "Puesto",
      cantidadVotos: 2230,
    },
    {
      tema: "She loves you",
      cantidadVotos: 850,
    },
    {
      tema: "Bienvenito",
      cantidadVotos: 410,
    },
  ];
  function ordernarListado(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j].tema > arr[j + 1].tema) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  const busquedaBinaria = (nombreTema) => {
    let nuevoArreglo = ordenar(temas);
    //console.log(nuevoArreglo);
    let inicio = 0;
    let final = nuevoArreglo.length - 1;
    while (inicio <= final) {
      let medio = Math.round((inicio + final) / 2);
      let encontrado = nuevoArreglo[medio].tema;
      if (encontrado === nombreTema) {
        return `La cantidad de votos del tema ${nombreTema} es : ${nuevoArreglo[medio].cantidadVotos}`;
      } else if (encontrado > nombreTema) {
        final = medio - 1;
      } else {
        inicio = medio + 1;
      }
    }
    return null;
  };
  
  ordernarListado(temas);
  console.log(temas);
  // console.log(busquedaBinaria(temas, 'Arrasando'));
  