//โจทย์จาก chat-gpt

// Destructuring = การดึงค่าจาก array หรือ object มาเก็บในตัวแปรได้ง่าย ๆ

// let arr = [1, 2, 3];
// let [a, b] = arr;
// console.log(a, b); // 1 2

// let person = { name: "Aom", age: 20 };
// let { name, age } = person;
// console.log(name, age); // Aom 20


// Spread (...) = การกระจายค่าออกมา

// let arr1 = [1, 2];
// let arr2 = [...arr1, 3, 4];
// console.log(arr2); // [1, 2, 3, 4]

// let obj1 = { a: 1, b: 2 };
// let obj2 = { ...obj1, c: 3 };
// console.log(obj2); // { a:1, b:2, c:3 }


// Rest (...) = การเก็บค่าที่เหลือไว้ใน array หรือ object

// let [x, ...y] = [10, 20, 30, 40];
// console.log(x); // 10
// console.log(y); // [20, 30, 40]

// let { p, ...rest } = { p: 1, q: 2, r: 3 };
// console.log(p);    // 1
// console.log(rest); // { q: 2, r: 3 }



// โจทย์ 1: Array Destructuring
// ให้ array = [100, 200, 300]
// ใช้ destructuring เพื่อเก็บค่าแรกเป็น a, ค่า 2 เป็น b แล้วแสดงผล

let array = [100, 200, 300];
let [a, b] = array;
console.log(a, b); // 100 200

// โจทย์ 2: Object Destructuring
// ให้ object = { title: "JS", level: "easy", score: 90 }
// ใช้ destructuring เพื่อดึงค่า title และ score มาแสดง

let object = { title: "JS", level: "easy", score: 90 };
let { title, score } = object;
console.log(title, score); // JS 90

// โจทย์ 3: Spread Operator
// ให้ arr1 = [1, 2] และ arr2 = [3, 4]
// รวม 2 array เข้าด้วยกันโดยใช้ spread

let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];
console.log(combined); // [1,2,3,4]

// โจทย์ 4: Rest Operator
// ให้ array = [10, 20, 30, 40, 50]
// ใช้ destructuring กับ rest operator โดยให้ตัวแรกเก็บใน first และที่เหลือเก็บใน others

let array2 = [10, 20, 30, 40, 50];
let [first, ...others] = array2;
console.log(first);   // 10
console.log(others);  // [20, 30, 40, 50]

// โจทย์ 5: Function + Rest
// เขียนฟังก์ชัน sumAll(...nums) ที่รับจำนวนตัวเลขไม่จำกัด แล้ว return ผลรวม

function sumAll(...nums) {
    return nums.reduce((a, c) => a + c, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10
console.log(sumAll(10, 20));     // 30