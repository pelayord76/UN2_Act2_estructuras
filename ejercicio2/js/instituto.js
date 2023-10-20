export default class Instituto {
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