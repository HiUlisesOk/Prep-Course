// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arrayN = [];
  for (const property in objeto){
    var arrayN2 = [property, objeto[property]];
    arrayN.push(arrayN2)
  }
  return arrayN;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const obj = {};

for (i = 0; i < string.length; i++){
  if (!obj[string.charAt(i)]){
 obj[string.charAt(i)] = 0;
  }
 obj[string.charAt(i)] += 1;
}
  return obj;
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
 var esMay = "";
 var esMin = "";
  for (i = 0; i < s.length;i++){
    if (s[i].toUpperCase() === s[i]){
var esMay = esMay + s[i];
    } else {var esMin = esMin + s[i];}
   
  }
      return esMay + esMin;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var acum = str.split(" ");
  var acum2 = "";
  for (i = 0; i < acum.length; i++){
   for (x = acum[i].length -1 ; x >= 0; x--){
   var acum2 = acum2 + acum[i][x];
  }
  if (i < acum.length -1){
    acum2 = acum2 + " ";
  } 
}
return acum2;
}



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numero = "" + numero + "";
var num1 = Array.from(numero);
var num2 = [];
  	for (i = numero.length -1; i >= 0;i--){
	num2.push(numero[i])
    }
  var num1 = "" + num1 + "";
  var num2 = "" + num2 + "";
  if (num1 === num2){
    return "Es capicua";
  } else{
    return "No es capicua";
  }
}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadena = cadena.toLowerCase()
  var cadena = Array.from(cadena);
  var cadenaN = [];
  
  for (i = 0; i < cadena.length; i++){
    
    let cad = cadena[i];
    
			if (cad != "a" && cad != "b" && cad != "c" ){
  
  		var cadenaN = cadenaN + cadena[i]
  
		 }
  }
  return "" + cadenaN + "";
}



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arregloOrdenado = arr.sort( function(a,b){
    if (a.length > b.length){
      return 1;
    } else if(a.length === b.length){
      return 0;
    } else {return -1;}
  })
  return arregloOrdenado;
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  arrayN = [];
  arreglo1.filter(inter)
    function inter(value){
        for (i = 0; i < arreglo2.length;i++){
      if (value === arreglo2[i]){
        arrayN.push(value);
      }
    }
  }
      return arrayN;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

