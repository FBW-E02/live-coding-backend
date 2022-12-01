// TypeScript is superset of JS
// no learning curve
// support for ES6
// it will predict future errors in the real time
// typescript file extension is .ts
// typescript doesnt execute in node and browser (transpile it to js)
// Transpiler (typescript)
// RunTime Errors
// RealTime Errors (Live)
//Error JS
//Reference error
/* console.log(age) */
//Syntax error
/* function printName(){
    console.log("hello world") */
//Type Error
/* let isLoggedIn = true;
isLoggedIn() */
//Logical Error
// code runs fine but you will not get expected output
/* let products = [{
    name:"headphone",
    price:300
}]
products="hello"
console.log(products) */
/*
function sum (a,a){
    console.log(a+a)
}
sum(3,5) */
console.log("Hello World");
console.log("watching");
console.log("another clg");
// implicit type setting
var firstName = "Naqvi";
//string type
// explicit type setting
var lastName;
lastName = "syed";
/* lastName=23 */
//number type
var age = 23;
// boolean type
var isLoggedIn = true;
// null type
var nullValue = null;
// union type
var union = true;
var user = null;
// object type
var student = { name: "john", age: 23 };
student = { name: "smith", age: 34, contact: 21314144 };
var record = {
    name: "record one",
    price: 233,
    orderIds: [1, 2, 3]
};
/* let product :RecordType<string[]> = {
    name:"record one",
    price:233,
    orderIds:["132","322rr224"]
}
let data :RecordType<string> ={
    name:"record one",
    price:233,
    orderIds:"hsdahfajds"
} */
var printName;
printName = function (name) {
    console.log(name);
};
