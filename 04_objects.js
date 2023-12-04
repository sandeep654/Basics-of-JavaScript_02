// const obj1=new Object() // Singleton object

const obj2={} // non singleton object 

obj2.id="123abc"
obj2.name="Sandy"
obj2.isLoggedIn= false
obj2.password="1234wsasd"
// console.log(obj1);

let obj1={
    Name:"Sandeep",
    EmailId:"yadavsan@gmail.com",
    phonenum:1234,
    location:"Gurugram",
    system:"hang krdenge"
}
const Obj3= {obj1 ,obj2 }   // objects ke andhar objects ho jaaega ye krne se 
// console.log(Obj3);

console.log(obj2["isLoggedIn"]);

console.log(obj1['EmailId']);   // syntax to acces object in Sqr bracket = objectName[" "]

console.log(Object.assign({},obj2,obj1));   // assign two object in one object  {}=target , source=obj2 , obj1 

console.log({...obj1,...obj2})   // it is also a way to add two objects in one object even it is a better one.

console.log(Object.keys(obj1));  // objects(obj1) ke andhar jo bhi keys h vo print ho jaaegi arrays mai .
console.log(Object.values(obj1));// we can also access values of objt1
console.log(Object.entries(obj1)); // saare key value array ban jaate h or array mai chle jaate h 

console.log(Object.keys(obj2));  // objects(obj2) ke andhar jo bhi keys h vo print ho jaaegi arrays mai .we can access

console.log(obj1.hasOwnProperty('location')); // hasOwnProperty function shows is property exist in it or not ..if yes print true or else false

// ---------------------Destructuring o fobject -------------------

const course={
    coursename:"Js in hindi ",
    Price:999,
    coursementor:"Hitesh"
}

const {coursementor:mentor}=course // coursementor ko course.coursementor nhi likhna pdaega smjhe sirf coursementor likh ke access kar skte h 

console.log(`Course Mentored by ${mentor}`);

const {coursename}=course
const {Price}=course
// console.log(`${coursename} is available`);
console.log(mentor,coursename,Price,course.Price);


// --------------API = Application Programming Interface-----------apna kaam kisi or ke sar pe daal dena...menucard is api documentation
// {
//     "name":"sandeep",
//     "course":"js in hindi "
//     "price":"free of cost"
// }
 //randomuser api (json formatter)    JSON - JavaScript object notation
[
    {},
    {},
    {}
]