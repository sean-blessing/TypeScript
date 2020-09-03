var a = 1;
var b = 'Hello!';
var c = true;
var d = [1, 2, 3];
a = a + 1;
function xyz(a, b, c) {
    return a + b + c;
}
var x = xyz(1, 2, 3);
if (a == 1) {
    console.log("a is 1");
}
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var e = Color.Green;
var f = [1, "2", true, [], {}];
var g;
g = "abc";
g = 1;
//let h: any[];
//h = "abc";
//h = 1;
//h.push("abc");
//h.push(1);
var i = 0;
//i = 1;
//2nd demo
//==================================
var Bootcamp = /** @class */ (function () {
    function Bootcamp(aName) {
        this.name = aName;
        this.about();
    }
    Bootcamp.prototype.about = function () {
        console.log(name);
    };
    return Bootcamp;
}());
var bc = new Bootcamp("Great Eight");
bc.about();
