function revarseText(str){
    var revarse  = " ";
    for (var i = 0; i<str.length; i++){
        var car = str[i];
        revarse = car + revarse;
    }
    return revarse;
}
var revarse = "Hello How Are U Baby";
var word = revarseText(revarse);
console.log(word);