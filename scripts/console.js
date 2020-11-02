//
//
/* 
// Local storage exists for every domain
// and it is handled by the browser
undefined
// We can use it to save key: value strings
undefined
localStorage
Storage {secret: "love ice cream", test: "bananarama is my fav word", length: 2}
// localStorage limitation: you can store only strings
undefined
const myArr = [1 , 2 ,3, 'bob', 'sarah' ]
undefined
// convert arr/obj to a string first
undefined
const myArrStr = JSON.stringify( myArr )
undefined
// Save the array/obj string in the localStorage
undefined
localStorage.setItem('myArr',  myArrStr);
undefined
localStorage
Storage {secret: "love ice cream", myArr: "[1,2,3,"bob","sarah"]", test: "bananarama is my fav word", length: 3}length: 3myArr: "[1,2,3,"bob","sarah"]"secret: "love ice cream"test: "bananarama is my fav word"__proto__: Storage
// Get and convert stored string back to an array
const strArr = localStorage.getItem("myArr");
undefined
const arr = JSON.parse(strArr);
undefined
arr
(5) [1, 2, 3, "bob", "sarah"]
*/
