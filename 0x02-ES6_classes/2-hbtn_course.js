export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name !== "string") {
            throw new TypeError('Name must be a string')
        }
        else if (typeof length !== 'number') {
            throw new TypeError('Length must be a number')
        }
        else if (!Array.isArray(students) || !students.every((e) => typeof e === 'string')) {
            throw new TypeError('Students must be an array of strings')
        }

        this._name = name;
        this._length = length;
        this._students = students;
    
    }
    // Getter for name
    get name() {
        return this._name;
    }

    // setter for name
    set name(name) {
        this._name = name;
    }

    // Getter for length
    get length() {
        return this._length;
    }

    // setter for lenght
    set length(lenght) {
        this._length = lenght;
    }

    // Getter for students
    get students() {
        return this._students;
    }

    // setter for students
    set students(students) {
        this._students = students;
    }




}

