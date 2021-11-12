var numbers = [21, 21, 34, 545, 67, 7, 88, 11, 12, 24, 56, 77, 77];
var UniqeName = [];
for (var i = 0; i < numbers.length; i++) {

    var element = numbers[i];
    var index = UniqeName.indexOf(element);
    if (index == -1) {
        UniqeName.push(element);
    }
}
console.log(UniqeName);