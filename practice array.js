// โจทย์ Array พื้นฐาน (วันนี้) จาก chat-gpt
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

// โจทย์ Array ระดับกลาง (วันนี้) จาก chat-gpt
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
