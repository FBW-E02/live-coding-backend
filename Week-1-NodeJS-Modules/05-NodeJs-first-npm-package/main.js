

// SemVer (Semantic Version)
// Semantic version is the standard way of numbering your software
// version 1.0.0 
// version Major.Minor.Patch
// patch fix bugs
// minor add new feature
// major (new code might break your application / it is not compatible with new version)


export function addition(a,b){
    return a+b
}
export function products(a,b){
    return a*b
}
export function rangeRandomNumbers(min,max){
    return Math.floor(Math.random()*(max-min)+ min)
}