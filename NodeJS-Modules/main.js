// modules
// simple javascript file
/* console.log(module) */


//module systems

//CommonJS Module Syntax
/* const { sum } = require("./math.js")


console.log(sum(3,4)) */


//ES6 Module Syntax
import {sum} from "./math.js"
import chalk from 'chalk';

console.log(chalk.bgBlue(sum(3,4)));







// import and export
