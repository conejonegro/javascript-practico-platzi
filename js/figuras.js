// Area y Perimetro del Cuadrado
function perimetroCuadrado(lado){
    return lado * 4
}

function areaCuadrado(lado){
    return lado * lado
}

console.groupEnd()

// Area y perimetro de Triangulo

console.group("Triangulo")


function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base
}

function areaTriangulo(base, altura){
    return (base * altura) / 2
}

console.groupEnd()

// Radio, Area y Circuferencia del Ciruclo
console.group("Circulo")

const PI = Math.PI;

function circunferencia(radio){
  return  (radio * 2) * PI
}

function areaCirculo(radio){
   return `El area del Ciruclo es: ${PI * (radio * radio)} CM^2`
}

console.groupEnd()

// // Web app

// // Perimetro de un Cuadrado
 function calcularPerimetro(){

    const ladoElemento = document.getElementById("ladoCuadrado")

    const lado1 = ladoElemento.value

    alert(perimetroCuadrado(lado1))

}

// Area de un Cuadrado
function calcularArea(){

    const ladoElemento = document.getElementById("ladoCuadrado")

    const lado = ladoElemento.value

    alert(areaCuadrado(lado))

}

// Perimetro de un Triangulo en Funciones conectadas a HTML

  const calcularPerimetroTriangulo = () => {

    const ladoUnoTriangulo = document.getElementById("ladoUnoTriangulo")
    var valorLadoUno = Number(ladoUnoTriangulo.value)

    const ladoDosTriangulo = document.getElementById("ladoDosTriangulo")
    var valorLadoDos = Number(ladoDosTriangulo.value)

    const baseTriangulo = document.getElementById("baseTriangulo")
    var valorbaseTriangulo = Number(baseTriangulo.value)

    const perimetroT = perimetroTriangulo(valorLadoUno, valorLadoDos, valorbaseTriangulo)

    alert(perimetroT)

  }

 const calcularAreaTriangulo = () => {

  const baseElem = document.getElementById("baseTriangulo")
  const base = baseElem.value

  const alturaElem = document.getElementById("alturaTriangulo")
  const altura = alturaElem.value

  alert(areaTriangulo(base, altura))
  }

// Calcular Diametro y Area de Circulo en pantalla


const calcularCircunferencia = () => {

  const radioInput = document.getElementById("radioInput")
  const radio = radioInput.value

 alert(circunferencia(radio)) 
}

const calcularAreaCirculo = () => {

  const radioInput = document.getElementById("radioInput")
  const radio = radioInput.value

  alert(areaCirculo(radio))

}

// TRIANGULO ISOSELES

/*
## En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

##La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.

## La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.

## La función debe retornar la altura del triángulo.

Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.
*/

const calcularAlturaIsoseles = (ladoUno,ladoDos, base) => {

  const ladoUnoElem = document.getElementById("ladoUnoIsoseles")
  const ladoUnoIsoseles = ladoUnoElem.value

  const ladoDosElem = document.getElementById("ladoDosIsoseles")
  const ladoDosIsoseles = ladoDosElem.value

  const baseElem = document.getElementById("baseIsoseles")
  const baseIsoseles = baseElem.value

  if(ladoUnoIsoseles == ladoDosIsoseles){
    const catetoDos = baseIsoseles / 2
    const hipotenusa = ladoUnoIsoseles 
  
    // Formula para calcular cateto 1 de triangulo rectangulo
    const hipotenusaCuadrado = hipotenusa * hipotenusa
    const catetoDosCuadrado = catetoDos * catetoDos
  
    const catetoUno = Math.sqrt(hipotenusaCuadrado - catetoDosCuadrado) 
  
    alert(catetoUno)

  }
  else{
    alert("Lado uno y lado dos del Triangulo deben ser iguales")
  }

}


