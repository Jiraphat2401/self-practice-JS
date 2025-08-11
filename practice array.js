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