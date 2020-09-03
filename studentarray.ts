let a=0;

// Create a classs
// Create 8 instances of the class
// put them in an array that only holds the right type

class Bootcamper {
    name: string;
    color: string;
    nbr: number;

    about(): void {
        console.log("Name = "+this.name+", color = "+this.color+", nbr="+this.nbr);
    }

    constructor(aName: string, aColor: string, aNbr: number) {
        this.name = aName;
        this.color = aColor;
        this.nbr = aNbr;
        this.about();
    }
}
let bc1: Bootcamper = new Bootcamper("Andrew", "Blue", 11);
let bc2: Bootcamper = new Bootcamper("Bill", "Red", 6);
let bc3: Bootcamper = new Bootcamper("Joe", "Black", 1);
let bc4: Bootcamper = new Bootcamper("Luke", "Purple", 17);
let bc5: Bootcamper = new Bootcamper("Eric", "Orange", 22);
let bc6: Bootcamper = new Bootcamper("Denise", "Yellow", 44);
let bc7: Bootcamper = new Bootcamper("Lisa", "Pink", 55);
let bc8: Bootcamper = new Bootcamper("Emilie", "Green", 66);

let eliteEight: Bootcamper[] = [bc1,bc2,bc3,bc4,bc5,bc6,bc7,bc8];

for (let b of eliteEight) {
	b.about();
}
