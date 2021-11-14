var fahim = 300;
var rahim = 800;
var karim = 500;

var max = Math.max(fahim,rahim,karim);
console.log(max);

if (fahim > rahim) {
    if (fahim > karim) {
        console.log('fahim borolok')
    }
    else {
        console.log('karim borolok')
    }

}
else {
    if (rahim > karim) {
        console.log('rahim  borolok');
    }
    else {
        console.log('karim borolok');
    }

}