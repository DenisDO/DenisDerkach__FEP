let IngredientsNeed = {
    Egg: 10,
    Shrimp: 10,
    Chicken: 200,
    Bow: 5,
    SoySauce: 2,
    ChiliSauce: 1,
    VegetableOil: 2,
    SomethingNew: 2
};

let IngredientsHave = {
    Egg: 50,
    Shrimp: 30,
    Chicken: 600,
    Bow: 17,
    SoySauce: 10,
    ChiliSauce: 5,
    VegetableOil: 10
};

let maxdishes = 100;
let bufferr;

function checkIngredients() {
    for (key in IngredientsNeed) {
        let ingredientNeed = key;

        for (key in IngredientsHave) {
            let ingredientHave = key;
            if (ingredientNeed === ingredientHave) {
                bufferr = 1;
                break;
            } else {
                bufferr = 0;
                continue;
            }
        }
        
        if (bufferr === 0) {
            return false;
        } else {
            
        }
    }
}

function solveQuantity() {
    for (key in IngredientsNeed) {
        let ingredientNeed = key;
        
        for (key in IngredientsHave) {
            let ingredientHave = key;
            
            if (ingredientNeed === ingredientHave) {
                let Quantity = IngredientsHave[ingredientHave] / IngredientsNeed[ingredientNeed];
                Quantity = parseInt(Quantity);
                if (Quantity <= maxdishes) {
                    maxdishes = Quantity;
                } else {
                    continue;
                }
            }
        }
    }
}

if (checkIngredients() === false) {
    console.log(`Not enough ingredients.`);
} else {
    solveQuantity();
    console.log(`You can cook ${maxdishes} dishes.`);
}