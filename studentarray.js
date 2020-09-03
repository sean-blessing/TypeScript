var a = 0;
// Create a classs
// Create 8 instances of the class
// put them in an array that only holds the right type
var Bootcamper = /** @class */ (function () {
    function Bootcamper(aName, aColor, aNbr) {
        this.name = aName;
        this.color = aColor;
        this.nbr = aNbr;
        this.about();
    }
    Bootcamper.prototype.about = function () {
        console.log("Name = " + this.name + ", color = " + this.color + ", nbr=" + this.nbr);
    };
    return Bootcamper;
}());
var bc1 = new Bootcamper("Andrew", "Blue", 11);
var bc2 = new Bootcamper("Bill", "Red", 6);
var bc3 = new Bootcamper("Joe", "Black", 1);
var bc4 = new Bootcamper("Luke", "Purple", 17);
var bc5 = new Bootcamper("Eric", "Orange", 22);
var bc6 = new Bootcamper("Denise", "Yellow", 44);
var bc7 = new Bootcamper("Lisa", "Pink", 55);
var bc8 = new Bootcamper("Emilie", "Green", 66);
var eliteEight = [bc1, bc2, bc3, bc4, bc5, bc6, bc7, bc8];
for (var _i = 0, eliteEight_1 = eliteEight; _i < eliteEight_1.length; _i++) {
    var b = eliteEight_1[_i];
    b.about();
}
