//โจทย์จาก chat-gpt

// Concept สั้น ๆ ของ this

// 1.ใน object method → this หมายถึง object นั้นเอง

// const person = {
//     name: "Aom",
//     sayName: function() {
//         console.log(this.name);
//     }
// };
// person.sayName(); // "Aom"


// 2.ใน function ปกติ (เรียกตรง ๆ) → this หมายถึง window (browser) หรือ undefined (strict mode)

// function show() {
//     console.log(this);
// }
// show(); // window หรือ undefined


// 3.Arrow function → ไม่มี this ของตัวเอง มันจะ "ยืม" this จากข้างนอก

// const obj = {
//     name: "Aom",
//     arrowFn: () => {
//         console.log(this.name);
//     }
// };
// obj.arrowFn(); // undefined (เพราะ arrow ใช้ this จาก global scope)


// 4.ใน class → this หมายถึง instance ที่สร้างขึ้นจาก class

// class Car {
//     constructor(brand) {
//         this.brand = brand;
//     }
//     showBrand() {
//         console.log(this.brand);
//     }
// }
// const myCar = new Car("Toyota");
// myCar.showBrand(); // Toyota

// โจทย์ 1
// เขียน object dog ที่มี property name: "Lucky" และ method bark() ให้ bark แสดง "Lucky says woof!"

const dog = {
    name: "Lucky",
    bark: function() {
        console.log(this.name + " says woof!");
    }
};

dog.bark(); // Lucky says woof!

// โจทย์ 2
// เขียน function showThis() (แบบ function ปกติ) แล้วเรียกมัน จะได้ค่า this เป็นอะไร?

function showThis() {
    console.log(this);
}

showThis(); 

// โจทย์ 3
// เขียน object cat ที่มี method 2 แบบ (normal function vs arrow function)

const cat = {
    name: "Milo",
    normalFn: function() {
        console.log(this.name);
    },
    arrowFn: () => {
        console.log(this.name);
    }
};

cat.normalFn(); // Milo
cat.arrowFn();  // undefined (เพราะ arrow function ไม่มี this ของตัวเอง)

// โจทย์ 4
// สร้าง class User ที่รับ username ใน constructor แล้วมี method sayHi()

class User {
    constructor(username) {
        this.username = username;
    }

    sayHi() {
        console.log("Hello, " + this.username);
    }
}

const u1 = new User("Aom");
u1.sayHi(); // Hello, Aom
