// function plustwo(A){
//     return (A+2)
// }
// console.log(plustwo(3))

// //1.fuction declaration
// function multiply(a,b){
//    return a*b
// }
// console.log(multiply(2,3))

// //2.fuction expression (using arrow fuction syntax)
// const multiply2=(a,b)=>a*b
// console.log(multiply2(4,2))
// //3.fuction expressiong (using fuction declaration)
// const multiply3=function(a,b){return a*b}
// console.log(multiply3(5,2))

// //1. function declaration
// function multiply1(a,b){
//     return a*b
// }
// // console.log(multiply1(2, 3))

// //2. function expression (using arrow function syntax)
// const multiply2= (a, b)=>{return a*b}  //(a,b)=>a*b
// console.log(multiply2(4,2))
// //3. function expressiong (using function declaration)
// const multiply3=function(a,b){return a*b}
// console.log(multiply3(5,2))

// console.log(typeof multiply1)
// console.log(typeof multiply2)
// console.log(typeof multiply3)
// const x=multiply1
// const y=multiply2
// const z=multiply3
// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof z)
// console.log(x(2,3))
// console.log(y(3,3))
// console.log(z(4,3))

// let a=1
// let b=a
// console.log( typeof a)
// console.log( typeof b)

// if(x===multiply1)
//     console.log("x equals to multiply1")
// else
//     console.log('x not equals to multiply1')

     
//1. function declaration
// function multiply1(a,b){ //a=3, b=5
//     return a*b //3*5
// }
// function doSomething(x){ //x=multiply1
//    return x(3,5)//multiply1(3,5)
// }
// console.log(doSomething(multiply1))//pass function to another function //15

// const y=doSomething(multiply1)


// function sayGoodbye(){
//     return 'Good bye'
// }

// function doSomething(){
//     return sayGoodbye
// }
// let doIt=doSomething()
// console.log(doSomething()())
 

// function myFunc(theObject){
//     theObject.model="A9999"
// }
// const product = {model:"A1001",price:199}
// console.log(product.model)
// myFunc(product)
// console.log(product.model)

function getsum(...params){
    total = 0
    for (i of arguments) {
        total = total + i
    }
    return total
}

console.log(getsum(99,2,3,4))

function greeting(greet = "Hello", whom = "Guest", quote = "How are you?") {
  return `${greet} ${whom} ${quote}`
}

console.log(greeting("hi")) //Hello Guest How are you?
console.log(greeting("Good morning", "Guy", "Great!")) //Good morning Guy Great!
console.log(greeting(undefined, null, "Fine")) //Hello null Fine
console.log(greeting()) //Hello Guest How are you?

function getFreqOfWords(sentence){
    if (sentence == null||undefined){return undefined}
    let words = sentence.toLowerCase().split(" ");
    let freq = {};
    for (let i of words){
        if (freq[i]) {
            freq[i] += 1;
        } else {
            freq[i] = 1;
        }
    }
    return freq;
}

console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null))
console.log(getFreqOfWords(undefined))