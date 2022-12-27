var notas;
var promedio;
var suma = 0;
var nnotas = parseInt(prompt("Digite la cantidad de notas a promediar: "));


for (i = 0; i < nnotas; i++) {
    var notas = parseInt(prompt("Digite la nota " + i));
    suma = suma + notas;
}

promedio = suma / nnotas;

alert("El resultado es " + promedio);

if (promedio > 70) {
    alert("El alumno aprobo con un promedio de " + promedio)
}

else {
    alert("El alumno no aprobo porque su promedio fue " + promedio);
}


