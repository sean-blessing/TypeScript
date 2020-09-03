let a: number = 1;
let b: string = 'Hello!';
let c: boolean = true;

let d: number[] = [1, 2, 3];
a = a + 1;

function xyz(a: number, b: number, c: number): number {
    return a + b + c;
}

let x: number = xyz(1, 2, 3);
if (a == 1) {
    console.log("a is 1");
}

enum Color { Red, Green, Blue };
let e: Color = Color.Green;

let f: any = [1, "2", true, [], {}];

let g: any;
g = "abc";
g = 1;

//let h: any[];
//h = "abc";
//h = 1;
//h.push("abc");
//h.push(1);

const i = 0;
//i = 1;

//2nd demo
//==================================
class Bootcamp {
    name: string;

    about(): void {
        console.log(name);
    }

    constructor(aName: string) {
        this.name = aName;
        this.about();
    }
}

let bc: Bootcamp = new Bootcamp("Great Eight");

bc.about();