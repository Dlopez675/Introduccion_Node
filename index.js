const { registrar, leer } = require("./operaciones");


let option = process.argv[2];
let nombre = process.argv[3];
let edad = process.argv[4];
let tipo_animal = process.argv[5]
let color = process.argv[6];
let enfermedad = process.argv[7];

if (option === "registrar") {
    registrar(nombre, edad, tipo_animal, color, enfermedad);
} 

if (option === "leer") {
    leer();
}