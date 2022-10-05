//region
var lastname = "martina"
let idioma = "español"
const animal = "dogo"



console.log(lastname)
console.log(idioma)
console.log(animal)
    //endregion


//region
function potencia() {
    var num1 = prompt("ingrese un numero para la base");
    n1 = parseInt(num1);
    var num2 = prompt("ingrese otro numero para el exponente");
    n2 = parseInt(num2);
    var resultado = parseInt(math.pow(n1, n2));
    document.write("el resultado es :" + resultado);

}
//endregion
//region
function baserectangulo() {
    var base, altura, area;
    base = parseInt(prompt("ingrese la base del rectangulo "));
    altura = parseInt(prompt("ingrese la altura del rectangulo "));
    area = (base * altura);
    alert("el area del resctangulo es:" + area);
}
//endregion 
//region
var materia1 = new Array(3);
for (var i = 0; i < 3, i++)
    materia1[i] = new Array(4);

for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 4; y++) {
        materia1[x][y] = Math.round(Math.random() * 100);
    }

}
for (var x = 0; x < 4; x++) {
    for (var y = 0; y < 3; y++) {
        console.log(mat1[y][x] + "\t");
    }
}
//endregion