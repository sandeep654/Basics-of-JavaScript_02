// push()  concat()  Array(...x1,...x2)  flat(infinity)  array.from() array.of(x1,x2,x3,x5)

const arr=[210,30,40,50,650,90]

let arr1=[10,20340,540,600,300]

let arr2=[209,80,90,700,675,890]

// console.log(arr.push(100));

console.log(arr.concat(arr1,arr2));   // joining arrays in one array

let arr3= Array(...arr,...arr1,...arr2) // joining different arrays into same array .

// console.log(arr3); 

let arr4 = Array.from(arr2)

// console.log(arr4);

let arr5 = Array.of(arr,arr1,arr2,arr3,arr4) // array ke andhar array .we can access these array by indexing []

console.log(arr5);