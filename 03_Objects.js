// Singleton :- koi constructor se object bnate h toh singleton banta h
// Object.create 

// jab hum literal ki tarah koi object create krte h toh singleton nahi bnta h 
// Object literals 

const Mysym=Symbol("hlo")

const New_User =
{ Name:"Sandeep ",
 "Full name":"Sandeep Yadav",
Age:23,
emailid:"yadavsan@gmail.com",
[Mysym]:"hloo"}

New_User.emailid="yadavsan@microsoft.com"
 
// Object.freeze(New_User)    //freeze karne ke baad value change nahi kar skte hum.

New_User.emailid="yadavsan@google.com"


console.log(New_User);
console.log(typeof New_User);

// two ways to access objects in javascript 
console.log(New_User.Age);
console.log(New_User["Age"]);
console.log(New_User['Name']);
console.log(New_User["Full name"]);
console.log(typeof New_User[Mysym]);




// -----------------functions----------------------

New_User.location = function(){
    console.log("gurgaon");
}
New_User.location2 = function(){
    console.log(`${this.Name} from gurgaon`);
}

console.log(New_User.location());
console.log(New_User.location2());