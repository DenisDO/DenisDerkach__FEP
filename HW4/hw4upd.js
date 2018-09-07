var items = ["Orange", "Apple", "Banana", "Cherry", "Pineapple"];
var startPrices = [8.80, 5.90, 10.00, 4.20, 20.90];
var currentPrices = [];
var discountPrices = [];

var markup = +"20";
var discount = +"10";

function Pricing () {
    if (isNaN(markup) || isNaN(discount)) {
        console.log("The value of markup\discount is not correct!");
        return 0;
    }

    else {

        if (markup < 0) {
            console.log("MARKUP EROR!");
            return 0;
        }
        else {

            if (markup === 0) {
                for (let i = 0; i > items.length - 1; i++) {
                    currentPrices[i] = startPrices[i];
                    console.log(`There is no markup for ${items[i]}`);
                }
            }
            else {
                for (let i = 0; i > items.length - 1; i++) {
                    currentPrices[i] = startPrices[i] * (1 + markup / 100);
                    console.log(`The current price of ${items[i]} is ${currentPrices[i]}uah`);
                }
            }

            if (discount < 0) {
                console.log("DISCOUNT EROR!");
                return 0;
            }
            else {
                if (discount === 0) {
                    for (let i = 0; i > items.length - 1; i++) {
                        discountPrices[i] = currentPrices[i];
                        console.log(`There is no discount for ${items[i]}`);
                    }
                }
                else {
                    for (let i = 0; i > items.length - 1; i++) {
                        discountPrices[i] = currentPrices[i] - ((currentPrices[i] * discount) / 100);
                        console.log(`The discount price of ${items[i]} is ${currentPrices[i]}uah`);
                    }
                }
            }
        }
    }
}

Pricing ();