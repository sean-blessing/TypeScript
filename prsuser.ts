console.log("User js started...")
class User {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    admin: boolean;
    reviewer: boolean;
    active: boolean;

    display(): void {
        console.log("Id",this.id);
        console.log("userName",this.userName);
        console.log("password",this.password);
        console.log("firstName",this.firstName);
        console.log("lastName",this.lastName);
        console.log("phone",this.phone);
        console.log("email",this.email);
        console.log("admin",this.admin);
        console.log("reviewer",this.reviewer);
        console.log("active",this.active);
        console.log("********************************************");
    }

    constructor(uname: string, pwd: string, fName: string, 
                lName: string, phone: string, email: string,
                adm: boolean, rvw: boolean, act: boolean) {
        this.userName = uname;
        this.password = pwd;
        this.firstName = fName;
        this.lastName = lName;
        this.phone = phone;
        this.email = email;
        this.admin = adm;
        this.reviewer = rvw;
        this.active = act;
    }
}
console.log("Creating users...")

let u1: User = new User("sblessing", "sesame", "Sean", "Blessing", "444-444-4444", "sean@tech.com",
                         true, true, true);
let u2: User = new User("jmoorhouse", "sesame", "Joe", "Moorhouse", "555-555-5555", "joe@tech.com",
                         true, true, true);
let u3: User = new User("dclark", "sesame", "Denise", "Clark", "888-888-8888", "denise@tech.com",
                         true, true, true);
console.log("Displaying users...")

u1.display();
u2.display();
u3.display();