var result = [56,67,45,32,78,92,55,24];
var max = result[0];
for (var i = 0; i <result.length; i++){
    var element = result[i];
    if(element>max){
        max = element;
    }
}

console.log('big value is :', max);