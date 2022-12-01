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




console.log("Hello World")
console.log("watching")
console.log("another clg")

// implicit type setting
let firstName = "Naqvi"


//string type

// explicit type setting
let lastName:string
lastName="syed"
/* lastName=23 */


//number type
let age :number = 23

// boolean type
let isLoggedIn :boolean = true


// null type
let nullValue : null = null

// union type
let union : number | string |boolean = true

let user : null | object = null;


// object type
let student : { name:string, age:number , contact?:number } = {name:"john",age:23}

student = {name:"smith",age:34, contact:21314144}

//Type or Interface
/* type ProductType = {
    title: string;
    price:number;
    imageUrl:string;
    id: string | number
}
type RecordType= {
    expiry:number
}
type MixedType = ProductType & RecordType
let product : ProductType = {title: "product one", price:300, imageUrl:"http://", id:3}

let record : MixedType = {expiry:234, id:23, title:"new record", price:230, imageUrl:"http://"} */


/* interface ProductType  {
    title: string;
    price:number;
    imageUrl:string;
    id: string | number
}
type RecordType = ProductType & {
    expiry:number
} */
/* interface RecordType extends ProductType {
    expiry: number
}
 */


/* let product : ProductType = {title: "product one", price:300, imageUrl:"http://", id:3}

let record : RecordType = {expiry:234, id:23, title:"new record", price:230, imageUrl:"http://"}
 */


// Array Type

/* let numbers : number[] =[2,3,4] */
/* let numbers : Array<number> = [2,3]

let words: string[] = ["first","second"]

let mixedArray : (string|number)[] = [2,3,"Naqvi",5, "berlin"] */

/* let randomNumber : number[] = []
randomNumber.push(23)
randomNumber.push("jkgsdkjgakds") */

// Tuple
/* let tupleArray : [number, boolean , string?] = [2,true] */

//Function Type

/* let printName : Function */
/* let printName : (name:string)=>void


printName= (name:string)=> {
    console.log(name)
}


const createRandomNumber = (range:number) : number =>{
    return Math.random()*range
} */


// Generic Type
// create a block of code that we can use again and again
/* interface User {
    name:string,
    age:number
}

const createUser =(obj:User)=>{
    return {...obj, uid: Math.random()*100}
}

let userNew = createUser({name:"Naqvi",age:23})
console.log(userNew) */


interface RecordType<T> {
    name:string;
    price:number;
    orderIds: T
}

let record :RecordType<number[]> = {
    name:"record one",
    price:233,
    orderIds:[1,2,3]
}

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

 let printName : (name:string)=>void


printName= (name:string)=> {
    console.log(name)
}

