// let a = ["aray", 1 ,2,true,NaN];
// for(i=0; i < a.length ;i++ ){
//     console.log(a[i])
//     console.log(i)
//     console.log(typeof(a[i]))
//     console.log("----")
// }
// console.log(a)

// let a = ["aray", 1 ,2,true,NaN]; //grow array
// a.push("animal")
// a.push(100,false)
// console.log(a)

// let a = ["aray", 1 ,2,true,NaN]; //shirnk array

// delete a[2]
// console.log(a)

// let a = ["aray", 1 ,2,true,NaN]
// let b = {a}
// console.log(a)
// console.log(typeof(a))//object
// console.log(b)
// console.log(typeof(b))//object
// let c = [a,b]
// console.log(c)
// console.log(typeof(c)) //object

//array contains many objects
const colors=[{id:1, name:'red', tone:'hot'},{id:2, name:'purple', tone:'cool'},{id:3, name:'white', tone:'neutral'}]
// console.log(colors)
 
const contacts=[{email:['abc@gmail.com','foo@kmutt.ac.th']},
{address:['Bangkok', 'Puket']}]
console.log(contacts)
 
//array contains many arrays
const groups=[['Malee', 'Jane'], ['John', 'Jay', 'Pete']]
// console.log(groups)

// console.log(colors[1])

console.log(contacts[0].email[1])

// console.log(groups.length[1])

for (i=0; i < groups.length; i++){
    lastmember = groups[i]
    console.log(lastmember[lastmember.length-1])
}

let greeting = 'hello world'
let greetingch = [...greeting]
console.log(greetingch)

let j = new Array()
let h = new Array(10)
let k = new Array("d",1,3,4)

console.log(k)

let o =Array.of()
let o2 =Array.of(4)
let o3 =Array.of(1,3,4,5)
let o4 =Array.of("okay")

let o5 =Array.from(o4)
console.log(o)
console.log(o2)
console.log(o3)
console.log(o5)