//zadanie1
class KontoBankowe {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        this.#balance -= amount;
    }
    getBalance() {
        return this.#balance;
    }
}

//zadanie2
class Osoba {
    #name;
    #surname;

    constructor(name, surname) {
        this.#name = name;
        this.#surname = surname;
    }
    getName() {
        return this.#name;
    }
    getSurname() {
        return this.#surname;
    }

    static writeOutNameSurname(name, surname) {
        if(surname.isEmpty() === true) {
            console.log("Mam na imię" + name)
        }
        else {
            console.log("Nazywam się" + name + " " + surname);
        }
    }
}

//zadanie 3
const Osoba = {
    name: "Jan",

    greeting() {
        console.log(`Cześć, mam na imię ${this.name}`);
    }
}

const Uczen = Object.create(Osoba);

Uczen.greeting();

Uczen.grades = [3, 5, 4, 6, 5];

Uczen.calculateAverage = function(grades) {
    let numberOfGrades = grades.length;
    let sum = 0;
    for(let i = 0; i < numberOfGrades; i++) {
        sum += grades[i];
    }
    return sum/numberOfGrades;
}

//zadanie 4
class SrodekTransportu {
    #brand;
    #model;
    #vMax;

    constructor(brand, model, vMax) {
        this.#brand = brand;
        this.#model = model;
        this.#vMax = vMax;
        if(this.constructor == SrodekTransportu) {
            throw new Error("Klasa jest abstrakcyjna");
        }
    }
    getBrand() {
        return this.#brand;
    }
    getModel() {
        return this.#model;
    }
    getVMax() {
        return this.#vMax;
    }
}

class Samolot extends SrodekTransportu {
    #wingspan;

    constructor(brand, model, vMax, wingspan) {
        super(brand, model, vMax);
        this.#wingspan = wingspan;
    }
    getWingspan() {
        return this.#wingspan;
    }
}

class Auto extends SrodekTransportu {
    #typeOfFuel;

    constructor(brand, model, vMax, typeOfFuel) {
        super(brand, model, vMax);
        this.#typeOfFuel = typeOfFuel;
    }
    getTypeOfFuel() {
        return this.#typeOfFuel;
    }
}

class Lodz extends SrodekTransportu {
    #driveType;

    constructor(brand, model, vMax, driveType) {
        super(brand, model, vMax);
        this.#driveType = driveType;
    }
    getDriveType() {
        return this.#driveType;
    }
}

//zadanie 5
class Psowate {
    constructor() {
        if(this.constructor == Psowate) {
            throw new Error("Klasa jest abstrakcyjna");
        }
    }
    dajGlos() {

    }
}

class Pies extends Psowate {
    constructor() {
        super();
    }
    dajGlos() {
        console.log("Hau hau")
    }
}

const PsowateProto = {
    dajGlos() {

    }
}

const Wilk = Object.create(PsowateProto);

Wilk.dajGlos = function() {
    console.log("Auuuuuuf")
}

const Szczeniak = Object.create(PsowateProto);

Szczeniak.dajGlos = function() {
    console.log("Hau")
}

//zadanie 6
class Artysta {
    constructor() {
        if(this.constructor == Artysta) {
            throw new Error("Klasa jest abstrakcyjna");
        }
    }
    tworzDzielo() {
        
    }
    kontempluj() {

    }
}

class Rzezbiarz extends Artysta {
    constructor() {
        super();
    }
    tworzDzielo() {
        console.log("Rzeźbiarz tworzy rzeźbę");
    }
    kontempluj() {
        console.log("Rzeźbiarz ogląda swoją rzeźbę");
    }
}

class Malarz extends Artysta {
    constructor() {
        super();
    }
    tworzDzielo() {
        console.log("Malarz maluje obraz");
    }
    kontempluj() {
        console.log("Malarz podziwia swój obraz");
    }
}

class Pisarz extends Artysta {
    constructor() {
        super();
    }
    tworzDzielo() {
        console.log("Pisarz pisze książkę");
    }
    kontempluj() {
        console.log("Pisarz czyta swoje dzieło");
    }
}

//zadanie 8
class KalkulatorProsty {
    constructor() {

    }
    static suma(a, b) {
        return a + b;
    }
    static roznica(a, b) {
        return a - b;
    }
    static iloczyn(a, b) {
        return a * b;
    }
    static iloraz(a, b) {
        return a / b;
    }
    static potegowanie(a, b) {
        return Math.pow(a, b);
    }
    static pierwiastkowanie(a, b) {
        return Math.pow(a, 1 / b);
    }
}