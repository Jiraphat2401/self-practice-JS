//โจทย์จาก chat-gpt
// ข้อ 1 (Basic Function)
// เขียนฟังก์ชัน greet(name) ที่รับชื่อมา แล้วคืนค่า "Hello, <name>!"
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Hello, Alice!

// ข้อ 2 (คำนวณตัวเลข)
// เขียนฟังก์ชัน square(num) ที่รับตัวเลข แล้วคืนค่ากำลังสองของมัน

function square(num) {
    return num * num;
}

console.log(square(5)); // 25

// ข้อ 3 (มีค่าเริ่มต้น Default Parameter)
// เขียนฟังก์ชัน sayHi(name = "Guest") ถ้าไม่มีการส่งชื่อเข้ามา ให้ใช้ "Guest"

function sayHi(name = "Guest") {
    return `Hi, ${name}!`;
}

console.log(sayHi());        // Hi, Guest!
console.log(sayHi("Bob"));   // Hi, Bob!

// ข้อ 4 (ฟังก์ชันที่คืนค่า Object)
// เขียนฟังก์ชัน createUser(id, name) ที่คืนค่า object แบบนี้

function createUser(id, name) {
    return { id, name };
}

console.log(createUser(1, "Alice")); 
// { id: 1, name: 'Alice' }

// ข้อ 5 (Higher-Order Function)
// เขียนฟังก์ชัน applyTwice(func, value) ที่จะเรียก func(value) สองครั้งติดกัน
// function double(x) { return x * 2; }

// applyTwice(double, 3); // 12

function applyTwice(func, value) {
    return func(func(value));
}

function double(x) {
    return x * 2;
}

console.log(applyTwice(double, 3)); // 12

// ข้อ 6 (Challenge!)
// เขียนฟังก์ชัน factorial(n) ที่คำนวณค่าแฟกทอเรียล (n!)
// เช่น factorial(5) = 5*4*3*2*1 = 120

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1); // recursion
}

console.log(factorial(5)); // 120