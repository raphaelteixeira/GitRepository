var numero = 100;

if (numero === "100") {
    console.log("It is equal");
} else {
    console.log("It is not equal");
}

var fruits = [
    { name: "apple" },
    { name: "orange" },
    { name: "melon" },
    { name: "strawberry" }
];

for (var fruit in fruits) {
    if (fruits[fruit].name == "orange") {
        console.log("I love " + fruits[fruit].name + "!");
    } else {
        var x;

        if (isVowel(fruits[fruit].name.charAt(0))) {
            x = "an";
            console.log("This is not an orange. This is " + x + " " + fruits[fruit].name);
        } else {
            x = "a";
            console.log("This is not an orange. This is " + x + " " + fruits[fruit].name);
        }
    }
}

function isVowel(vowel) {
    var result = vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u" || vowel == "A" || vowel == "E" || vowel == "I" || vowel == "O" || vowel == "U";

    return result;
}

var carro = {
    velocidade: 200,
    marca: "volvo",
    motor: {
        tamanho: 2.0,
        marca: "bmw",
        combustivel: "gasolina",
        pistoes: [
            { marca: "bmw" },
            { marca: "bmw2" }
        ]
    },
    informacoes: [
        "Raphael",
        "25",
        saudacao = function () {
            return "Hello world from Raphael.";
        }
    ],
    dirigir: function () { return "dirigir"; },
    removeAtributo: function (atributo) {
        delete carro[atributo];
        return "Atributo " + atributo + " removido com sucesso!";
    },
    addBeginElement: function (value) {
        this.informacoes.unshift(value);
        return "Atributo adicionado com sucesso!";
    },
    addEndingElement: function (value) {
        this.informacoes.push(value);
        return "Atributo adicionado com sucesso!";
    },
    removeElementsFromArray: function (startingPosition, amount) {
        this.informacoes.splice(startingPosition, amount);
        return "Atributo(s) removido(s) com sucesso!";
    },
    addElementByPosition: function (value, position) {
        this.informacoes.splice(position, 0, value);
    }

}

function name(fullName) {
    return fullName();
}

//console.log(name(function () { return "Raphael Arcanjo Ewerton Teixeira" }));


function Apple(color, weight) {
    this.color = color;
    this.weight = weight;
}

Apple.prototype = {
    eat: function () { return this },
    throw: function () { return "throw an apple" }
}

var apple1 = new Apple("Red", 99);
var apple1 = new Apple("Blue", 109);
var apple1 = new Apple("Black", 209);