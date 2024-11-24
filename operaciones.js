const fs = require ("fs");

const registrar = (nombre, edad, tipo_animal, color, enfermedad) => {
    const lista = fs.readFileSync("citas.json", "utf-8");
    let listaParseada = JSON.parse(lista);
    listaParseada.push({nombre, edad, tipo_animal, color, enfermedad});
    fs.writeFileSync("citas.json", JSON.stringify(listaParseada, null, 4))
}

const leer = () => {
    const lista = fs.readFileSync("citas.json", "utf-8");
    console.log(lista);
}

module.exports = { registrar, leer };