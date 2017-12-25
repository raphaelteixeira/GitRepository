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

console.log(name(function () { return "Raphael Arcanjo Ewerton Teixeira" }));
