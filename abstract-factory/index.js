var VeganPizza = /** @class */ (function () {
    function VeganPizza() {
    }
    VeganPizza.prototype.description = function () {
        return "vegan pizza";
    };
    return VeganPizza;
}());
var NormalPizza = /** @class */ (function () {
    function NormalPizza() {
    }
    NormalPizza.prototype.description = function () {
        return "normal pizza";
    };
    return NormalPizza;
}());
var VeganBurger = /** @class */ (function () {
    function VeganBurger() {
    }
    VeganBurger.prototype.description = function () {
        return "vegan burger";
    };
    return VeganBurger;
}());
var NormalBurger = /** @class */ (function () {
    function NormalBurger() {
    }
    NormalBurger.prototype.description = function () {
        return "normal burger";
    };
    return NormalBurger;
}());
var VeganFoodFactory = /** @class */ (function () {
    function VeganFoodFactory() {
    }
    VeganFoodFactory.prototype.createBurger = function () {
        return new VeganBurger();
    };
    VeganFoodFactory.prototype.createPizza = function () {
        return new VeganPizza();
    };
    return VeganFoodFactory;
}());
var NormalFoodFactory = /** @class */ (function () {
    function NormalFoodFactory() {
    }
    NormalFoodFactory.prototype.createBurger = function () {
        return new NormalBurger();
    };
    NormalFoodFactory.prototype.createPizza = function () {
        return new NormalPizza();
    };
    return NormalFoodFactory;
}());
var peopleType = process.argv[2];
var foodFabctory;
var pizza;
switch (peopleType) {
    case "vegan":
        foodFabctory = new VeganFoodFactory();
        break;
    case "normal":
        foodFabctory = new NormalFoodFactory();
        break;
    default:
        console.log("Who r u?");
        process.exit(1);
}
console.log(foodFabctory.createPizza().description());
console.log(foodFabctory.createBurger().description());
