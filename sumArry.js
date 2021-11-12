function sumArry(sumNumber){
    var sum = 0;
for (var i = 0; i < sumNumber.length; i++) {

    var element = sumNumber[i];
    sum = sum + element;
}
return sum;
}

var sumNumber = [23, 35, 65, 45, 67, 43, 34];
var total = sumArry(sumNumber);
console.log('total number : ', total);