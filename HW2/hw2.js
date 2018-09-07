//////////////////////////////////////////////////////////////////////////////
// Написать 5 вариантов записи строки It's beautiful day. I like "free day".//
//////////////////////////////////////////////////////////////////////////////
var str1 = "It\'s beautiful day. I like \"free day\"";
var str2 = 'It\'s beautiful day. I like \"free day\"';
var str6 = "I like \"free day\"";
var str7 = "It\'s beautiful day. ";
var str3 = str7 + str6;
var str4;
var str5 = str2;

str4 = "It\'s beautiful day. I like \"free day\"";

console.log (str1);
console.log (str2);
console.log (str3);
console.log (str4);
console.log (str5);


//////////////////////////////////////////////////////
// Написать правильное умножение двух дробных чисел.//
//////////////////////////////////////////////////////
var number1 = 2.15;
var number2 = 3.33;
var result = number1.toFixed(5) * number2.toFixed(5);
console.log(result.toFixed(5) === result.toFixed(5));


////////////////////////
// "string" + 2 => NaN//
////////////////////////
console.log (+"string" + 2);