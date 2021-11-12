var a = 6;
var b = 8;
console.log("before swap : a =", a, "b =", b);
var all = a;
a = b;
b = all;
console.log("after swap : a =", a, "b =", b);

// new

var x = 12;
var y = 13;
x = x+y;
y = x-y;
x = x-y;
 
console.log("after swap : x =", x, "y =", y);

// new one

var p = 5;
var q = 8;
 
[p, q] = [q, p];

console.log("after swap : p =", p, "q =", q);
