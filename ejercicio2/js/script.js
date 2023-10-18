class Grupo {
    constructor(id, numAlumnos) {
        this._id = id;
        this._numAlumnos = numAlumnos;
    }

    get Id() {
        return this._id;
    }

    set Id(id) {
        this._id = id;
    }

    get NumAlumnos() {
        return this._numAlumnos;
    }
    set NumAlumnos(num) {
        this._numAlumnos = num;
    }
}

class Instituto {
    constructor(id, nombre, grupos) {
        this._id = id;
        this._nombre = nombre;
        this._grupos = grupos;
    }

    get Id() {
        return this._id;
    }
    get Nombre() {
        return this._nombre;
    }

    cuantosAlumnos() {
        let devolver = 0;
        for (let i = 0; i < this._grupos.length; i++) {
            devolver += this._grupos[i].NumAlumnos;
        }
        return devolver;
    }

    addGrupo(grupo){
        this._grupos.push(grupo);
    }
}

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