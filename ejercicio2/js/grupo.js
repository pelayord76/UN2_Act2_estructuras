export default class Grupo {
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