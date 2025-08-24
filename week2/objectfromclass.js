let human = {H01: "adam"}
console.log(human)

let key = {f1: function(){return this.f2 }, f2: "guy"}
console.log(key.f1())

let kiy = {f3(){return this.f4}, f4: "teak"}
console.log(kiy.f3())

let composite = { A:[1,"2",false ,{s:"supersaiya"}], B: {p:"person"}}
console.log(composite)


const book={isbn:12345678, title:'Introduction to JS',
    authors:[{firstname:'John'}, {lastname:'Smith'},{firstname:'Danial'}, {lastname:'Doh'}], 
    versions:[1.0, 2.0,3.0], isAvailable:true, 
    getISBN(){return this.isbn}}
console.log(book)
console.log(book.getISBN())
console.log(book.authors)

let curse = {d:"bigger",d:"smaller"}
console.log(curse)

book.publishDate=new Date(2025,1,10)
console.log(book)
delete book.isAvailable
console.log(book)

for (const key in book) {
    console.log(book[key])
}


//1.object literal
// const book={isbn:12345678, title:'Introduction to JS', getISBN:function(){return this.isbn}}

//2. constructor function
// function Book(isbn, title){
//     this.isbn=isbn
//     this.title=title
// }
// const b1=new Book(123, 'JS')
// const b2=new Book(888, 'CSS')
// console.log(b1)
// console.log(b2)
//3.class
class Book{
    constructor(isbn, title){
        this.isbn=isbn
        this.title=title
    }
    getISBN(){
        return this.isbn
    }
    setTitle(title){
        this.title=title
    }
    getBookInfo(){
        return `isbn: ${this.isbn}, title: ${this.title}`
    }
}
const myBook=new Book(12345678, 'JS Beginner')
// console.log(myBook.getBookInfo())
// console.log(myBook.getISBN())
// console.log(myBook.setTitle('JS for Beginner'))
// console.log(myBook.getBookInfo())

//4. using Object.create(existingObj)
const journal=Object.create(myBook)
journal.ISSN=587904
console.log(journal)
console.log(journal.isbn)
console.log(journal.title)


const b1={isbn:123,title:"JS"}
const b2={isbn:123,title:"JS"}
function compareBook(x,y){
    return x.isbn===y.ield?true:false
}
console.log(compareBook(b1,b2))

function shallowEquality(object1,object2){
    const keys1=Object.keys(object1)
    const keys2=Object.keys(object2)

    if(keys1.length !== keys2.length){
        return false
    }
    for(let key of keys1){
        if(object1[key] !== object2[key]){
            return false
        }
    }
    return true

}

let book1={
    isbn:123456789,
    title:"JavaScript",
}
let book2={
    isbn:123456789,
    title:"JavaScript",
}

console.log("shallow equality:"+ shallowEquality(book1,book2))