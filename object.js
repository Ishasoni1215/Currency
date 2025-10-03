student1={
    fullName:"Isha",
    marks:55,
    printmarks:function(){
        console.log("marks=",this.marks);
    }
}

//#1
const employe={
    calcTax(){
        console.log("tax rate is 10%");
    }
};

 const karanarjun={
    salary:69000,
}

karanarjun.__proto__= employe;

//constructor
class toyotaCar{
    constructor(){
        console.log("creating a new object");
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

let fortuner=new toyotaCar();

//inheritance
class person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class engineer extends person{
    work(){
        console.log("solve the problems");
    }
    
}

let ishaObj=new engineer();


//practice1
let DATA= "secret information";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

viewData(){
    console.log("data=",DATA);
}
}
class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="some new information";
    }

}

let student=new user("isha","abc@gmail.com");
let teacher=new user("dean","dean@gmail.com");
let admin=new Admin("adimn","admin@gmail.com");