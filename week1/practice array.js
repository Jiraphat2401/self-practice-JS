// โจทย์ Array พื้นฐาน (วันนี้) จาก chat-gpt Day-1
// โจทย์ 1:
// สร้างตัวแปรชื่อ fruits ให้เป็น array ที่เก็บ "apple", "banana", "mango"
// จากนั้นแสดงผลลำดับที่ 2 ของ array (index 1)

let fruits = ["apple", "banana", "mango"]
console.log(fruits[1])

// โจทย์ 2:
// เพิ่ม "orange" ไปที่ท้าย array fruits และแสดงผล array ใหม่

fruits.push("orange")
console.log(fruits)

// โจทย์ 3:
// ลบข้อมูลตัวแรกใน array fruits และแสดงผล array ใหม่

fruits.shift()
console.log(fruits)

// โจทย์ 4:
// หาความยาวของ array fruits และแสดงผล

console.log(fruits.length)

// โจทย์ 5:
// เขียนโปรแกรมวนลูป fruits ด้วย for แล้วแสดงผลทุกตัวออกมา

for(let i=0; i < fruits.length; i++){
    console.log(fruits[i])
}

//คำตอบทำเองครับผม

// โจทย์ Array ระดับกลาง (วันนี้) จาก chat-gpt Day-2
// โจทย์ 1:
// ให้ numbers = [3, 7, 2, 9, 5]
// ใช้ .map() เพื่อสร้าง array ใหม่ที่มีค่าทุกตัวคูณ 2 แล้วแสดงผล

let numbers = [3, 7, 2, 9, 5]
let double = numbers.map(n => n *2);
console.log(numbers)//[3,7,2,9,5]
console.log(double) //[6,14,4,18,10]

// โจทย์ 2:
// ใช้ .filter() เพื่อหาตัวเลขที่มากกว่า 4 จาก numbers แล้วแสดงผล

let filter = numbers.filter(n => n > 4);
console.log(filter) // [7,9,5]

// โจทย์ 3:
// ใช้ .reduce() เพื่อหาผลรวมของตัวเลขทั้งหมดใน numbers

let reduce = numbers.reduce((a,c) => a + c,0);
console.log(reduce) // 26

// โจทย์ 4:
// ให้ words = ["apple", "banana", "mango", "orange"]
// ใช้ .includes() เพื่อตรวจสอบว่า "banana" อยู่ใน array หรือไม่ และแสดงผลเป็น true หรือ false

let words = ["apple", "banana", "mango", "orange"]
console.log(words.includes("banana")) // true

// โจทย์ 5:
// ใช้ for...of วนลูป words แล้วพิมพ์ความยาวของแต่ละคำ

for (const i of words) {
    console.log(i.length)
} //5, 6, 5, 6


// โจทย์ 1: จาก chat-gpt Day-3
// ให้ numbersD3 = [10, 25, 3, 50, 7, 99, 2]

// ใช้ .filter() เพื่อเลือกตัวเลขที่มากกว่า 10

// จากนั้นใช้ .map() เพื่อคูณ 3 กับตัวเลขที่ได้

// แสดงผล array ใหม่

let numbersD3 = [10, 25, 3, 50, 7, 99, 2]
let more_ten = numbersD3.filter(n => n > 10).map(n => n * 3)
console.log(more_ten)

// โจทย์ 2:
// ให้ scores = [80, 95, 50, 70, 100, 60]
// ใช้ .reduce() เพื่อหาค่าเฉลี่ย (average) ของคะแนนทั้งหมด

let scores = [80, 95, 50, 70, 100, 60]
let sum = scores.reduce((a,c) => a + c ,0)
let average = sum / scores.length
console.log(average)

// let average = scores.reduce((acc, curr, index, array) => { คำตอบจาก Chat-gpt
//     acc += curr; // สะสมผลรวม
//     if (index === array.length - 1) {
//         return acc / array.length; // หารตอนรอบสุดท้าย
//     }
//     return acc;
// }, 0);

// console.log(average); // 75.83333333333333


// โจทย์ 3:
// ให้ wordsD3 = ["apple", "banana", "cherry", "kiwi", "grape"]
// ใช้ .sort() เพื่อเรียงคำตามความยาวของตัวอักษร (จากน้อยไปมาก)

let wordsD3 = ["apple", "banana", "cherry", "kiwi", "grape"]
wordsD3.sort((a,b) => a.length - b.length)
console.log(wordsD3)


// โจทย์ 4:
// ให้ people = [ { name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 20 } ]
// ใช้ .reduce() เพื่อเปลี่ยน array ของ object ให้กลายเป็น object แบบนี้:

// {
//   Alice: 25,
//   Bob: 30,
//   Charlie: 20
// }

let people = [ { name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 20 } ]
let peopleObject = people.reduce((acc,person) => {
    acc[person.name] = person.age 
    return acc},{});
console.log(peopleObject)

// โจทย์ 5:
// ให้ numbersD3_2 = [1, 2, 3, 4, 5, 6]
// ใช้ for...of เพื่อหาผลรวมของตัวเลขที่เป็น จำนวนคู่
// แสดงผลรวมที่ได้

let numbersD3_2 = [1,2,3,4,5,6]
let sumEven = 0
for (const n of numbersD3_2){
    if (n % 2 === 0){
        sumEven += n
}
}
console.log(sumEven)


