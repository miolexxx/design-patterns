/**
 * Pizza interface
 */
interface Pizza {
  description(): string;
}

/**
 * Burger interface
 */
interface Burger {
  description(): string;
}

/**
 * Vegan pizza class
 */
class VeganPizza implements Pizza {
  description(): string {
    return "vegan pizza";
  }
}

/**
 * Normal pizza class
 */
class NormalPizza implements Pizza {
  description(): string {
    return "normal pizza";
  }
}

/**
 * Vegan burger class
 */
class VeganBurger implements Pizza {
  description(): string {
    return "vegan burger";
  }
}

/**
 * Normal burger class
 */
class NormalBurger implements Pizza {
  description(): string {
    return "normal burger";
  }
}

/**
 * Food factory interface
 */
interface FoodFactory {
  createPizza(): Pizza;
  createBurger(): Burger;
}

/**
 * Vegan factory class
 */
class VeganFoodFactory implements FoodFactory {
  createBurger(): Burger {
    return new VeganBurger();
  }
  createPizza(): Pizza {
    return new VeganPizza();
  }
}

/**
 * Normal factory class
 */
class NormalFoodFactory implements FoodFactory {
  createBurger(): Burger {
    return new NormalBurger();
  }
  createPizza(): Pizza {
    return new NormalPizza();
  }
}

let peopleType = process.argv[2];
let foodFabctory: FoodFactory;
let pizza: Pizza;

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
