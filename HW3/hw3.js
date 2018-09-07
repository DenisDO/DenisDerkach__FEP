var orange = "Orange";
var apple = "Apple";
var banana = "Banana";
var cherry = "Cherry";
var pineapple = "Pineapple";

var orangeStartPrice = 8.80;
var appleStartPrice = 5.90;
var bananaStartPrice = 10.00;
var cherryStartPrice = 4.20;
var pineappleStartPrice = 20.90;

var markup = 20;

function CurrentPricing (itemStartPrice, markup) {
    var itemStartPrice = itemStartPrice;
    var markup = markup;
    
    if (markup < 0) {
        console.log("MARKUP EROR!");
        return 0;
    }
    else if (markup == 0) {
        var itemCurrentPrice = itemStartPrice;
        return itemCurrentPrice.toFixed(2);
    }
    else {
        var itemCurrentPrice = itemStartPrice * (1 + markup / 100);
        return itemCurrentPrice.toFixed(2);
    }
}

var orangeCurrentPrice = CurrentPricing(orangeStartPrice, markup);
var appleCurrentPrice = CurrentPricing(appleStartPrice, markup);
var bananaCurrentPrice = CurrentPricing(bananaStartPrice, markup);
var cherryCurrentPrice = CurrentPricing(cherryStartPrice, markup);
var pineappleCurrentPrice = CurrentPricing(pineappleStartPrice, markup);

var discount = 33;

function DiscountPricing (itemCurrentPrice, discount) {
    var itemCurrentPrice = itemCurrentPrice;
    var discount = discount;

    if (discount < 0) {
        console.log("DISCOUNT EROR!");
        return 0;
    }
    else if (discount == 0) {
        var itemDiscountPrice = itemCurrentPrice;
        return itemDiscountPrice;
    }
    else {
        var itemDiscountPrice = itemCurrentPrice - ((itemCurrentPrice * discount) / 100);
        return itemDiscountPrice.toFixed(2);
    }
}

var orangeDiscountPrice = DiscountPricing(orangeCurrentPrice, discount);
var appleDiscountPrice = DiscountPricing(appleCurrentPrice, discount);
var bananaDiscountPrice = DiscountPricing(bananaCurrentPrice, discount);
var cherryDiscountPrice = DiscountPricing(cherryCurrentPrice, discount);
var pineappleDiscountPrice = DiscountPricing(pineappleCurrentPrice, discount);

console.log (`Markup percent - ${markup}%
Discount percent - ${discount}%`);

console.log (`Item: \ \ \ \ \ \ \  ${orange} \ ${apple} \ ${banana} \ ${cherry} \ ${pineapple}
Price: \ \ \ \ \ \ \ \ ${orangeCurrentPrice} \ \ ${appleCurrentPrice} \ \ ${bananaCurrentPrice} \ \ \ \ \ ${cherryCurrentPrice} \ \ \ ${pineappleCurrentPrice}
Discount price: ${orangeDiscountPrice} \ \ ${appleDiscountPrice} \ \ ${bananaDiscountPrice} \ \ \ \ ${cherryDiscountPrice} \ \ \ ${pineappleDiscountPrice}`);