/* console.log("hello world") */


//Host (object you received from environment) window

/* console.log(window) */


//Host objects nodejs we receive global object
/* console.log(global) */
/* console.log(process) */
/* console.log(__dirname) */ // absolute path of working directory

/* 
const user = {
    name:"Naqvi",
    age:23,
    hobbies: ["tennis","reading"]
}

user.hobbies[1]
 */

/*  console.log(process.argv.slice(2))  */ // argument variables

let arguments = process.argv.slice(2);
console.log(arguments)

/* const [operator,num1,num2] = arguments 

 if(operator==="sum"){
   console.log("addition of these two numbers is ,", Number(num1) + Number(num2))
}else if(operator==="multiply"){
    console.log("product of these two numbers is ,", Number(num1)*Number(num2))
}
 */


//destructure array
const [operator, ...numbers] = arguments

if(operator==="sum"){
    const total = numbers.reduce((acc,item)=>{
        acc += Number(item)
        return acc
    }, 0)
    console.log("sum of all numbers is :", total)
}