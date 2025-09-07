//โจทย์จาก chat-gpt
// ข้อ 1
// สร้าง object ชื่อ student ที่มี property ดังนี้
// name = "Alice"
// age = 20
// major = "Computer Science"
// แล้วให้เขียนโค้ดพิมพ์ออกมาเป็นข้อความ
// Alice is 20 years old and studies Computer Science.

let student = {
    name: "Alice",
    age: 20,
    major: "Computer Science"
};

console.log(`${student.name} is ${student.age} years old and studies ${student.major}.`);

// ข้อ 2
// ให้สร้าง object car ที่มี property
// brand = "Toyota"
// model = "Corolla"
// year = 2020
// จากนั้นให้เพิ่ม property ใหม่ชื่อ color = "red"
// แล้วพิมพ์ object ออกมา

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

// เพิ่ม property ใหม่
car.color = "red";

console.log(car);
// { brand: 'Toyota', model: 'Corolla', year: 2020, color: 'red' }

// ข้อ 3 ให้เขียนฟังก์ชัน countProperties(obj) ที่คืนค่าจำนวน property ของ object ที่ส่งเข้าไป
function countProperties(obj) {
    return Object.keys(obj).length;
}

let user = { id: 1, name: "Bob", role: "Admin" };
console.log(countProperties(user)); // 3

// ข้อ 4 ให้สร้าง object scores ที่เก็บคะแนนของนักเรียน 3 คน ดังนี้
// { Alice: 85, Bob: 70, Charlie: 95 }

let scores = {
    Alice: 85,
    Bob: 70,
    Charlie: 95
};

let maxName = "";
let maxScore = 0;

for (let name in scores) {
    if (scores[name] > maxScore) {
        maxScore = scores[name];
        maxName = name;
    }
}

console.log(`${maxName} has the highest score: ${maxScore}`);
// Charlie has the highest score: 95

// ข้อ 5
// เขียนฟังก์ชัน mergeObjects(obj1, obj2) ที่รวม object สองตัวเข้าด้วยกัน
// ถ้ามี key ซ้ำกัน ให้ใช้ค่าของ obj2

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

let a = { x: 1, y: 2 };
let b = { y: 99, z: 3 };

console.log(mergeObjects(a, b));
// { x: 1, y: 99, z: 3 }