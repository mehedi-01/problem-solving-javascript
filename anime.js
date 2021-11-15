function animeZone(depth) {
    var anime = 0;
    if (depth <= 10) {
        anime = depth * 50;
    }
    else if (depth <= 20) {
        var first1 = 10 * 50;
        var remaninig = depth - 10;
        var first2 = remaninig * 100;
        anime = first1 + first2;

    }
    else {
        var first1 = 10 * 50;
        var first2 = 10 * 100;
        var remaninig = depth - 20;
        var first3 = remaninig * 300;
        anime = first1 + first2 + first3;
    }
    return anime;
}
var toatll = animeZone(51);
console.log(toatll);

