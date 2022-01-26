var SimpleCalculator = /** @class */ (function () {
    function SimpleCalculator() {
    }
    SimpleCalculator.prototype.sum = function (a, b) {
        return a + b;
    };
    SimpleCalculator.prototype.mult = function (a, b) {
        return a * b;
    };
    return SimpleCalculator;
}());
var LogDecorator = /** @class */ (function () {
    function LogDecorator(calc) {
        this.calc = calc;
    }
    LogDecorator.prototype.sum = function (a, b) {
        var result = this.calc.sum(a, b);
        console.log("Log sum ".concat(a, " + ").concat(b, " = ").concat(result));
        return result;
    };
    LogDecorator.prototype.mult = function (a, b) {
        var result = this.calc.mult(a, b);
        console.log("Log mult ".concat(a, " * ").concat(b, " = ").concat(result));
        return result;
    };
    return LogDecorator;
}());
var sc = new SimpleCalculator();
sc.sum(2, 2);
var csLog = new LogDecorator(sc);
csLog.sum(3, 4);
csLog.mult(3, 4);
