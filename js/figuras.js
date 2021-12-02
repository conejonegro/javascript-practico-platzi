// Area y Perimetro del Cuadrado
console.group("Cuadrado")

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`El Lado del Cuadrado mide ${ladoCuadrado} Cm`)
console.log(`El Perimetro del cuadrado es ${perimetroCuadrado} Cm`)
console.log(`El area del cuadrado es ${areaCuadrado} Cm^2`)

console.groupEnd()


// Area y perimetro de Triangulo
console.group("Triangulo")


const ladoUnoTriangulo = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoUnoTriangulo + ladoUnoTriangulo + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(`El lado del triangulo mide ${ladoUnoTriangulo} cm`)
console.log(`La base del triangulo mide ${baseTriangulo} Cm`)
console.log(`El perimetro del triangulo es ${perimetroTriangulo} `)
console.log(`El area del Triangulo es ${areaTriangulo} Cm^2`)

console.groupEnd()

// Radio, Area y Circuferencia del Ciruclo
console.group("Circulo")

const radio = 4;
const PI = Math.PI;
const diametro = radio * 2;
const circunferencia =  diametro  * PI ;
const areaCirculo = PI * (radio*radio);

console.log(`El Radio es ${radio} Cm`)
console.log(`El Diametro es  ${diametro} Cm`)
console.log(`La circunferencia es  ${circunferencia} Cm`)
console.log(`El area es  ${areaCirculo} Cm^2`)

console.groupEnd()



