import Instituto from "./instituto.js";
import Grupo from "./grupo.js";

let primeroDAW = new Grupo(1, 30);
let segundoDAW = new Grupo(2, 20);
let primeroDAM = new Grupo(3, 25);
let segundoDAM = new Grupo(4, 15);
let gruposFleming = [primeroDAW, segundoDAW, primeroDAM, segundoDAM];

let fleming = new Instituto(1, "Fleming", gruposFleming);

console.log("ID del instituto " + fleming.Nombre + ": " + fleming.Id);

console.log("En el " + fleming.Nombre + " hay " + fleming.cuantosAlumnos() + " alumnos.");

let primeroASIR = new Grupo(5, 40);
fleming.addGrupo(primeroASIR);