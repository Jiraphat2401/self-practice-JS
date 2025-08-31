const words =['mango','apple','mangosteen','orange']
const shortwords=words.filter((word)=>word.length<=6)
console.log(words)
console.log(shortwords)

const sortedwords= words.sort()
console.log(words)
console.log(sortedwords)

const upper = words.map(x => x.toUpperCase())
console.log(upper)

const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]

const stu = students.map(x => x.id)
console.log(stu)

const words2 = ["Mango", "Apple", "mangosteen", "orange","mangoes"];
const mango = words2.filter(x=>x.toLowerCase().includes("mango"));
console.log(mango)

const apple = (words2.filter(x=>x.toLowerCase().includes("apple"))?"has apple":"does not have apple");
console.log(apple)

const cart = [
  { productId: 1001, price: 500, quantity: 2 },
  { productId: 1002, price: 10, quantity: 3 },
  { productId: 1003, price: 5, quantity: 10 },
]

const total = cart.map(product => product.price*product.quantity).reduce((s,p) => s + p ,0);
console.log(total)

const words1 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
// words1.splice(2,1,"banana")
// console.log(words1)
// words1.splice(-2,2)
// console.log(words1)
// words1.splice(2,0,'melon','cherry')
// console.log(words1)

words1.slice(2,6)
console.log(words1.slice(2))
console.log(words1.slice(0,3))
console.log(words1.fill(null))