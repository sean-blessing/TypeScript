console.log("User js started...");
var User = /** @class */ (function () {
    function User(uname, pwd, fName, lName, phone, email, adm, rvw, act) {
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
    User.prototype.display = function () {
        console.log("Id", this.id);
        console.log("userName", this.userName);
        console.log("password", this.password);
        console.log("firstName", this.firstName);
        console.log("lastName", this.lastName);
        console.log("phone", this.phone);
        console.log("email", this.email);
        console.log("admin", this.admin);
        console.log("reviewer", this.reviewer);
        console.log("active", this.active);
        console.log("********************************************");
    };
    return User;
}());
console.log("Creating users...");
var u1 = new User("sblessing", "sesame", "Sean", "Blessing", "444-444-4444", "sean@tech.com", true, true, true);
var u2 = new User("jmoorhouse", "sesame", "Joe", "Moorhouse", "555-555-5555", "joe@tech.com", true, true, true);
var u3 = new User("dclark", "sesame", "Denise", "Clark", "888-888-8888", "denise@tech.com", true, true, true);
console.log("Displaying users...");
u1.display();
u2.display();
u3.display();
