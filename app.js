// let b=10;
// let c=a+b;
// console.log(c)
// var a=5;
// a=5;
//###############Functions ##########################
//sayHi();
// function sayHi() {
//   console.log("in-side function")
// };

// let sayHi = function() {
//   console.log("in side")
// };
// sayHi();


// var obj1 = {
//   message: ' --- This is sample --- ',
//   printThis: function () {
//     var that = this;
//     return function nestedFunction(name, mName) {
//       console.log(name + that.message + mName)
//     }
//     // nestedFunction.call(this,"Ashish");
//     // nestedFunction.apply(this, ["Ashish", "Rajiv"]);
//     // var boundObj = nestedFunction.bind(this);
//     // boundObj("Pillu", "Manii");
//   }
// };
// obj1.printThis()("Ashish", "Pathak");

// var obj1 = {
//   message: ' --- This is sample --- ',
//   printThis: function () {
//     var that = this;
//     function nestedFunction(name, mName) {
//       console.log(name + that.message + mName)
//     }
//     nestedFunction.call(this,"Ashish","Pathak");
//     // nestedFunction.apply(this, ["Ashish", "Rajiv"]);
//     // var boundObj = nestedFunction.bind(this);
//     // boundObj("Pillu", "Manii");
//   }
// };
// obj1.printThis();

//Arrow function 'this' can be the auto reference
// var obj1 = {
//     message: ' --- This is sample --- ',
//     printThis: function() {
//         return nestedFunction = (name, mName) => {
//             console.log(name + this.message + mName)
//         }
//     }
// };
// obj1.printThis()("Ashish", "Pathak");

//################ Primitive and Non primitive data types ########################
// Primitives are immutable while non-promitives are mutable.
// var a = 12345;
// a[1] = 'H';
// console.log(a)

// ###################### Callbacks ###########################

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function operations(add, subtract, isAdd) {
//   if (isAdd) {
//     console.log(add(10, 6));
//   } else {
//     console.log(subtract(10, 6));
//   }
// }

// operations(add, subtract, false);

// ############################## Promises ##################################

// let isReject = true;
// let mPromise = new Promise((resolve, reject) => {
//   if (!isReject) {
//     setTimeout(() => {
//       resolve("Success");
//     }, 1000);
//   } else {
//     setTimeout(() => {
//       reject("failure");
//     }, 3000);
//   }
// });

// mPromise.then((message) => {
//   console.log(message);
// }).catch((message) => {
//   console.log(message);
// });

// ######################### Generator Function #########################

// function* generator(i) {
//   yield i;
//   yield i + 1;
// }
// const gen12345 = generator(1);
// console.log(gen12345.next());
// console.log(gen12345.next());
// console.log(gen12345.next());

// ########################### Call By Value/Ref ##########################

//Call By Value
// function test(a) {
//   a = 50;
// }
// var a = 10;
// test(a);
// console.log(a);

//Call By Ref

// function test(a) {
//   a.value = 50;
// }
// var a = { value: 10 };
// test(a);
// console.log(a.value);


// var z = 10;
// var outerFunction = function () {
//     if (true) {
//         var x = 5;
//         //console.log(y); //line 1, ReferenceError: y not defined
//     }
//     var nestedFunction = function () {
//         if (true) {
//             var y = 7;
//             console.log(x); //line 2, x will still be known prints 5
//         }
//         if (true) {
//             console.log(y); //line 3, prints 7
//             console.log(z);
//         }
//     }
//     return nestedFunction;
// }
// var myFunction = outerFunction();
// myFunction();

//############################### Arrays ############################
// var a = [1,10];
// a.length = 10;
// delete a[0];
// console.log(a);
// a();
// function a() {
//     console.log('a')
// }
// var ab = function () {
//     console.log('ab')
// }
// ab();

//Concat 2 arrays
// const a = [1,2,3,4,2,4,1];
// const b = [11,12,13];
// // a.splice(a.length,0,[...b]);
// const c = a.concat(b);
// console.log(c);

//################################# Reduce Method Usage
// var data = [
//     {
//         name: 'Butters',
//         age: 3,
//         type: 'dog'
//     },
//     {
//         name: 'Lizzy',
//         age: 6,
//         type: 'dog'
//     },
//     {
//         name: 'Red',
//         age: 1,
//         type: 'cat'
//     },
//     {
//         name: 'Joey',
//         age: 3,
//         type: 'dog'
//     },
// ];

// let dogList = data.filter(dataObj => {
//     if (dataObj.type === 'dog') {
//         dataObj.age = dataObj.age * 7;
//         return dataObj;
//     }
// });

// let sum = dogList.reduce((acc, val) => {
//     return val.type !== 'dog' ? acc : acc + val.age;
// }, 0);

// console.log(sum)

//############### Remove Duplicates from array
// let a = [1, 2, 3, 4, 1, 2, 3];
// // a = a.filter((numObj, index) => a.indexOf(numObj) === index);
// // a = [...new Set(a)];
// let uniqueChars = [];
// // can use map/forEach methods
// a.forEach((c) => {
//     if (!uniqueChars.includes(c)) {
//         uniqueChars.push(c);
//     }
// });
// console.log(uniqueChars);

///################################### General
// console.log((true + false > 2) + 'a');

// setTimeout(() => {
//     console.log('a');
// }, 1000);

// ####################################################