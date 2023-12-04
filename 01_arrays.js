// console.log(Array.isArray([10,60,70]));

const x=[10,20,23,12,13,15]

// -----Array method----
// console.log(x.push(70));
// console.log(x.push(17));
// console.log(x.pop());
// console.log(x[5]);

// console.log(x.unshift(9));
// console.log(x.shift());

// console.log(x.includes(20));
// console.log(x.indexOf(12));

const arr=x.join();   // convert into string while using join function 

const arr1=x.slice(1,4); //slice last element include nhi hota or vo array ko manipulate nhi krta 
console.log(arr1);
console.log(x);

const arr2=x.splice(1,4); //splice mai last element include hota h or vo array ko manipulate bhi krta h
console.log(arr2);
console.log(x);


console.log(x.length);
console.log(x);
console.log(arr);