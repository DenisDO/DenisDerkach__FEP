var str1 = "Beatae";
var str2 = "BeataeBeataeBeatae";

function myFunc (length, str) {
    if (length < 10) {
        var arr = str.split ('');
        for (var i = 0; i < arr.length; i++) {
            console.log (arr[i]);
        }
    }
    else {
        var firstStr = str.substr(0, 7);
        var secondtStr = str.substring(9, length);
        console.log(firstStr + " " + secondtStr);
    }
    
    console.log ("-------------------------------------");
}

myFunc (str1.length, str1);
myFunc (str2.length, str2);
