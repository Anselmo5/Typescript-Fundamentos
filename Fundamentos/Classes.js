var Carro = /** @class */ (function () {
    function Carro(marca, aro) {
        this.marca = marca;
        this.aro = aro;
    }
    Carro.prototype.verificarAro = function () {
        return "O Aro do carro \u00E9: ".concat(this.aro);
    };
    return Carro;
}());
var ferrari = new Carro("Ferrari", 20);
console.log(ferrari);
